import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    hmr: {
      host: 'localhost',
    },
    host: '0.0.0.0',
  },
});
