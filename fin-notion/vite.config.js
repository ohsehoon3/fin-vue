import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {find: '~', replacement: `${__dirname}/src` }
    ]
  },
  css: { // 스타일을 의미 
    preprocessorOptions: { // 전처리 도구 (scss 등등..)
      scss: { 
        additionalData: '@import "~/scss/main";'
      } // style 태그의 lang 옵션이 scss일 때, componant의 스타일 위쪽에 추가 해줌.
    }
  }
})
