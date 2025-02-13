import { defineConfig } from 'vite';
import fg from 'fast-glob';
import path from 'path';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
  resolve: {
    alias: {
      '@fonts': path.resolve(__dirname, 'src/fonts'),
    },
  },
  // base: '/trademark-rego-frotend/', // шлях до репозиторію
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      // використовуємо fast-glob для пошуку файлів
      input: fg.sync('./src/*.html'), // використовуємо синхронний метод
      // Враховуємо всі HTML-файли у підпапках
      // input: fg.sync(['./src/*.html', './src/pages/*.html']),
    },
  },
  plugins: [
    injectHTML(),
    FullReload(['./src/**/*.html', './src/**/*.scss']),
    ViteImageOptimizer({
      exclude: /^sprite.svg$/,
      png: { quality: 70 },
      jpeg: { quality: 70 },
      webp: { quality: 70 },
    }),
  ],
  server: {
    host: true,
    port: 3000,
  },
});
