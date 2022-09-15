import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from '~/routes'
import App from './App.vue'

createApp(App)
  .use(createPinia()) // createPinia는 함수이기 때문에 호출해야 함.
  .use(router)
  .mount('#app') // mount는 마지막에
