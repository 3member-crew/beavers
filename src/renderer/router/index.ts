import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Menu from '../views/Menu.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Menu',
    component: Menu,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router