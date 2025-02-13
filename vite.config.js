// import { defineConfig } from 'vite';
// import { glob } from 'glob';
// import path from 'path';
// import injectHTML from 'vite-plugin-html-inject';
// import FullReload from 'vite-plugin-full-reload';
// import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// export default defineConfig({
//   resolve: {
//     alias: {
//       '@fonts': path.resolve(__dirname, 'src/fonts'),
//     },
//   },
//   // base: '/rego-frontend/',
//   root: 'src',
//   build: {
//     outDir: '../dist',
//     emptyOutDir: true,
//     rollupOptions: {
//       // input: glob.sync('./src/*.html'),
//       input: await glob('./src/*.html'),
//     },
//   },
//   plugins: [
//     injectHTML(),
//     FullReload(['./src/**/*.html', './src/**/*.scss']),
//     ViteImageOptimizer({
//       exclude: /^sprite.svg$/,
//       png: { quality: 70 },
//       jpeg: { quality: 70 },
//       webp: { quality: 70 },
//     }),
//   ],
//   server: {
//     host: true,
//     port: 3000,
//   },
// });

import { defineConfig } from 'vite';
import fg from 'fast-glob'; // Заміна на fast-glob
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
  base: '/trademark-rego-frotend/', // шлях до репозиторію
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      // Використовуємо fast-glob для пошуку файлів
      input: fg.sync('./src/*.html'), // Використовуємо синхронний метод
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
