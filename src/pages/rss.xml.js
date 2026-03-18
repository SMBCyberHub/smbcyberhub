import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt();

export async function GET(context) {
  const posts = await getCollection('posts');
  const sortedPosts = posts.sort((a, b) => new Date(b.data.date) - new Date(a.data.date));

  return rss({
    title: 'SMBCyberHub – Cybersecurity Blog for Small Business',
    description: 'Practical cybersecurity tips, compliance guides, and training resources for small businesses. No logins, no subscriptions — just actionable advice.',
    site: context.site,
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      content: sanitizeHtml(md.render(post.body), {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img']),
      }),
      link: `/posts/${post.slug}/`,
      categories: post.data.tags || [],
      author: 'info@smbcyberhub.com (Jim SMBCyberHub)',
    })),
    customData: '<language>en</language><lastBuildDate>' + new Date().toUTCString() + '</lastBuildDate>',
    trailingSlash: true,
  });
}
