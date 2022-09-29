import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from '~/routes/index.js'
import loadImage from '~/plugins/loadImage'
import TheLoader from '~/components/TheLoader.vue'
import App from './App.vue'

createApp(App)
  .use(createPinia())
  .use(router)
  .use(loadImage)
  .component('TheLoader', TheLoader) // .component : 특정 컴포넌트를 전역 등록해줌.
  .mount('#app')
