import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {  // Or less or stylus, depending on your CSS preprocessor
        additionalData: `@import "swiper/swiper-bundle.scss";`, //  or swiper-bundle.less or swiper-bundle.styl
      },
    },
  },
  optimizeDeps: {
    include: ['swiper/swiper-bundle.css'],
  },
})
