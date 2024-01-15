/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
            colors: {
              'purple-text': '#241128',
              'purple-dark': '#4f2757',
              'purple-medium': '#92609c',
              'lilac-medium': '#92609c',
              'lilac-light': '#e0daef',
              'beige': '#faf2e7',
      },
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
  },
  plugins: [],
}
