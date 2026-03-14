/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';

export default {
  content: [
    './src/**/*.{astro,html,js,ts,md}'
  ],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.800'),
            a: {
              color: theme('colors.blue.700'),
              textDecoration: 'underline',
              fontWeight: '500',
              '&:hover': {
                color: theme('colors.blue.900'),
              },
            },
            strong: {
              color: theme('colors.gray.900'),
            },
            blockquote: {
              borderLeftColor: theme('colors.gray.300'),
              color: theme('colors.gray.600'),
              fontStyle: 'normal',
            },
            code: {
              backgroundColor: theme('colors.gray.100'),
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
            },
          },
        },
      }),
    },
  },
  plugins: [typography],
};
