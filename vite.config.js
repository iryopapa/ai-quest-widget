import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/widget.js'),
      formats: ['iife'],
      name: 'AIQuestWidget',
      fileName: 'ai-quest-widget',
    },
    cssCodeSplit: false,
    assetsInlineLimit: 4096, // Only inline files < 4KB
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
    },
  },
});
