import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
   base: '/Cat-Manage-System/',
  server: {
    host: 'localhost', // 监听所有网络接口
    port: 5176,      // 端口号
    open: true       // 启动时自动打开浏览器

  },
  resolve: {
    alias: {
      '@': '/src', // 设置 @ 为 src 目录的别名
    },
  },
})
