/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100%',
            color: 'rgb(var(--foreground-rgb))',
            h1: {
              color: 'rgb(var(--foreground-rgb))',
            },
            h2: {
              color: 'rgb(var(--foreground-rgb))',
            },
            h3: {
              color: 'rgb(var(--foreground-rgb))',
            },
            strong: {
              color: 'rgb(var(--foreground-rgb))',
            },
            a: {
              color: '#2563eb',
              '&:hover': {
                color: '#1d4ed8',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 