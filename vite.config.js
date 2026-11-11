import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from "@tailwindcss/vite";
import {resolve, dirname} from "path";
import {fileURLToPath} from "url";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: [
      { find: '#components', replacement: resolve(dirname(fileURLToPath(import.meta.url)), 'src/components') },
      { find: '#constants', replacement: resolve(dirname(fileURLToPath(import.meta.url)), 'src/constants') },
      { find: '#store', replacement: resolve(dirname(fileURLToPath(import.meta.url)), 'src/store') },
      { find: '#hoc', replacement: resolve(dirname(fileURLToPath(import.meta.url)), 'src/hoc') },
      { find: '#windows', replacement: resolve(dirname(fileURLToPath(import.meta.url)), 'src/windows') },
      // Use pdf.js's "legacy" build (includes polyfills). The modern build uses very new
      // JavaScript (Promise.try, Map.getOrInsertComputed…) that older iPhone Safari lacks,
      // which crashed the site when the Resume opened.
      { find: /^pdfjs-dist$/, replacement: 'pdfjs-dist/legacy/build/pdf.mjs' },
      { find: /^pdfjs-dist\/web\/pdf_viewer\.mjs$/, replacement: 'pdfjs-dist/legacy/web/pdf_viewer.mjs' },
    ],
  },
  build: {
    rolldownOptions: {
      output: {
        // Emit the PDF worker (pdf.worker.min.mjs) as .js: some hosts, like Hostinger,
        // serve .mjs as text/plain and the browser refuses to run it.
        assetFileNames: (asset) =>
          (asset.names?.[0] ?? asset.name ?? '').endsWith('.mjs')
            ? 'assets/[name]-[hash].js'
            : 'assets/[name]-[hash][extname]',
      },
    },
  },
});
