import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/Home.vue'
import HomeView from '../views/HomeView.vue'
import Login from '../components/Home/Login.vue'
import SignUp from '../components/Home/SignUp.vue'
import Dashboard from '../views/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/SignUp',
      name: 'SignUp',
      component: SignUp
    },
   
    {
      path: '/Dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
   
    // {
    //   path: '/Api/api.php?action=login',
    //   name: 'SignUp',
    //    component: SignUp
  
    // },


    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/Home/About.vue')
    }
  ]
})

export default router
