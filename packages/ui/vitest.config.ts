import react from '@vitejs/plugin-react';
import tsconfigpaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react(), tsconfigpaths()],
  test: {
    globals: true,
    environment: 'happy-dom',
  },
});
