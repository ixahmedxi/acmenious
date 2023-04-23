// @ts-check
import typography from '@tailwindcss/typography';
import windyRadixPalette from 'windy-radix-palette';
import windyRadixTypography from 'windy-radix-typography';

/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{js,jsx,ts,tsx,mdx}'],
  theme: {
    extend: {},
  },
  plugins: [windyRadixPalette, typography, windyRadixTypography],
};

export default config;
