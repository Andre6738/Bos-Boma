import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(() => {
  return {
    plugins: [react()],
    server: {
      port: 5173,
      open: true
    },
    build: {
      outDir: 'dist/client',
      emptyOutDir: true,
      sourcemap: false,
      chunkSizeWarningLimit: 1200,
      rollupOptions: {
        input: path.resolve(__dirname, 'index.html')
      }
    }
  };
});
