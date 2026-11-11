// Entry point for the PDF.js worker. Loading the polyfills first means the worker
// also runs on older iPhone Safari (the worker doesn't share the page's polyfills).
import './polyfills.js'
import 'pdfjs-dist/legacy/build/pdf.worker.min.mjs'
