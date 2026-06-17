import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom', // This is critical for testing UI
    setupFiles: './src/setupTests.ts', // Optional: for custom matchers
  },
});
