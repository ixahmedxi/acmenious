import acmePreset from '@acme/tailwind';

/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{js,jsx,ts,tsx,mdx}'],
  presets: [acmePreset],
  darkMode: 'class',
};

export default config;
