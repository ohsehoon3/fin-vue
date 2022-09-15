import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
  history: createWebHistory(), // 모드
  scrollBehavior: () => ({ top: 0 }), // 화면 전환시 스크롤 위치
  routes: [ // 관리할 페이지 목록
    {
      path: '/',
      component: () => import('./Home.vue')
      // import 함수는 promiss를 반환, 비동기로 동작. 위에서 import 하는거랑 같음.
    },
  ]
})
