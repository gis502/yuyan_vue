import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import {viteSingleFile} from "vite-plugin-singlefile";

// https://vite.dev/config/
export default defineConfig({
  base: './',  // 修改：使用相对路径
  plugins: [
    vue(),
    vueDevTools(),
    viteSingleFile()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: {
    port: 7000,
    strictPort: true
  },
  build: {
    cssCodeSplit: false,  // 禁用 CSS 代码分割
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
      }
    }
  }
})