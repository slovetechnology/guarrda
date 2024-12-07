import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      utils: resolve(__dirname, 'src/utils'),
      app: resolve(__dirname, 'src/app'),
      assets: resolve(__dirname, 'src/assets'),
      components: resolve(__dirname, 'src/components'),
      forms: resolve(__dirname, 'src/forms'),
      user: resolve(__dirname, 'src/user'),
      admin: resolve(__dirname, 'src/admin'),
    },
  },
})
