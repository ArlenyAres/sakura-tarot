/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
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
      colors: {
        'purple01': '#4F2757',
        'purple02': '#92609C',
        'purple03': '#AFA3CE',
        'purple04': '#E0DAEF',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
  },
  plugins: [],
}}
