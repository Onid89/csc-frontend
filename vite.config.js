import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    proxy: {
      '/api': 'https://csc-backend-4xi9.onrender.com',
    },
  },
});
