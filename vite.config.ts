//vite.config.ts
import { defineConfig } from 'vite'
export default defineConfig({
  build: {
    outDir: 'dist'
  },
  server: {
    fs: {
      allow: ['..']
    }
  },
  optimizeDeps: {
    exclude: ['zapier-lighthouse-wasm']
  }
})