import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path, { resolve } from 'path';

export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@repositories': resolve(__dirname, 'src/repositories'),
      '@pages': resolve(__dirname, 'src/pages'),
      '@lib': resolve(__dirname, 'src/lib'),
      '@components': resolve(__dirname, 'src/components'),
    },
  },
});
