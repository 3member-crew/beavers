import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Menu from '../views/Menu.vue'
import Profile from "../views/Profile.vue";
import Game from "../views/Game.vue";
import Leaderboard from "../views/Leaderboard.vue";
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
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
    component: Game,
    meta: { requiresAuth: true },
},
{
    path: '/leaderboard',
    name: 'LeaderBoard',
    component: Leaderboard
},
{
  path: '/login',
  name: 'Login',
  component: Login,
},
{
  path: '/register',
  name: 'Register',
  component: Login,
},
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((route) => route.meta.requiresAuth)) {
    if (!localStorage.getItem('token')) {

      next({ name: 'Login' });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router