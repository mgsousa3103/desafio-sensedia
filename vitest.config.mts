import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    dir: './src',
    setupFiles: ['./src/setup.tests.ts'],
    coverage: {
      exclude: [
        '**/node_modules/**',
        '**/.next/**',
        '**/*.d.ts',
        '*.config.js',
        '*.config.ts',
        '**/env.mjs',
        '**/config/*.ts',
        '**/index.ts',
        '**/page.tsx',
        '**/layout.tsx',
        '**/error.tss',
        '**/loading.tss',
      ],
      reporter: ['lcov', 'text'],
    },
  },
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, './src') }],
  },
});
