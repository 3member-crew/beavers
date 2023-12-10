import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Menu from '../views/Menu.vue'
import Profile from "../views/Profile.vue";
import Game from "../views/Game.vue";
import Leaderboard from "../views/Leaderboard.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Menu',
    component: Menu,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
},
{
    path: '/game',
    name: 'Game',
    component: Game
},
{
    path: '/leaderboard',
    name: 'LeaderBoard',
    component: Leaderboard
}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router