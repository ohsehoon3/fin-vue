import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
  history: createWebHistory(), // html5 모드
  scrollBehavior: () => ({ top: 0, left: 0 }),
  routes: [
    {
      path: '/workspaces/:id',
      component: () => import('~/routes/Workspace.vue') // import()는 promiss instanse 반환
    }
  ]
})
