import { execSync } from 'child_process';
import { defineConfig } from 'tsup';

export default defineConfig((opts) => ({
  entry: ['./src/index.tsx'],
  format: ['esm'],
  splitting: true,
  dts: false,
  sourcemap: true,
  clean: !opts.watch,
  minify: !opts.watch,
  minifyIdentifiers: !opts.watch,
  minifySyntax: !opts.watch,
  minifyWhitespace: !opts.watch,
  treeshake: true,
  platform: 'browser',
  async onSuccess() {
    execSync('tsc -p tsconfig.build.json --emitDeclarationOnly', {
      stdio: 'inherit',
    });
  },
}));
