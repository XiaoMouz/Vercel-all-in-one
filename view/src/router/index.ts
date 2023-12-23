// router/index.js 或 router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import PostView from '../views/PostView.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/IndexView.vue')
  },
  {
    path: '/post/:slug',
    name: 'Post',
    component: PostView,
    props: true // 允许将路由参数作为 props 传递给组件
  }

  // ...其他路由
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
