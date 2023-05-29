// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        'main': resolve(__dirname, 'index.html'),
        'hyperlinks': resolve(__dirname, 'src/demo/hyperlinks.html'),
        'aboutMe:': resolve(__dirname, 'src/demo/linkpage/aboutMe.html'),
      }
    }
  }
})