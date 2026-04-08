import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig(({ mode }) => {
  // Demo mode: normal build with index.html (for GitHub Pages)
  if (mode === 'demo') {
    return {
      base: '/ai-quest-widget/',
      build: {
        outDir: 'dist-demo',
        assetsInlineLimit: 4096,
      },
    };
  }

  // Default: library build (IIFE for WordPress embedding)
  return {
    build: {
      lib: {
        entry: resolve(__dirname, 'src/widget.js'),
        formats: ['iife'],
        name: 'AIQuestWidget',
        fileName: 'ai-quest-widget',
      },
      cssCodeSplit: false,
      assetsInlineLimit: 4096,
      rollupOptions: {
        output: {
          inlineDynamicImports: true,
          assetFileNames: 'assets/[name]-[hash][extname]',
        },
      },
    },
  };
});
