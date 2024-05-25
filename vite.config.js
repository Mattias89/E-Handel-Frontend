import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { copy } from 'vite-plugin-copy'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
  },
  plugins: [
    react(),
    copy({
      targets: [
        { src: 'web.config', dest: 'dist' }
      ]
    })
  ],
})