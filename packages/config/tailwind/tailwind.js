// @ts-check
/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{js,jsx,ts,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [
    require('windy-radix-palette'),
    require('@tailwindcss/typography'),
    require('windy-radix-typography'),
  ],
};

module.exports = config;
