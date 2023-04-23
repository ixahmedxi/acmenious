// @ts-check
import acmeTailwind from '@acme/tailwind';

/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{js,jsx,ts,tsx,mdx}'],
  darkMode: 'class',
  presets: [acmeTailwind],
};

module.exports = config;
