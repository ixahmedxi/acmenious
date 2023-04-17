/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{js,jsx,ts,tsx,mdx}'],
  presets: [require('@acme/tailwind')],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
};

module.exports = config;
