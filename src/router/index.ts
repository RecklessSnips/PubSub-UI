import { createRouter, createWebHistory } from 'vue-router'
import Landing from '../views/LandingPage.vue'
import NYTimes from '../views/NYTimes.vue'
import Reuters from '../views/Reuters.vue'
import CNN from '../views/CNN.vue'
import BBC from '../views/BBC.vue'
import Economist from '../views/Economist.vue'
import Subscription from '@/views/subscription/Subscription.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Landing,
    },
    {
      path: '/nytimes',
      component: NYTimes,
    },
    {
      path: '/reuters',
      component: Reuters,
    },
    {
      path: '/economist',
      component: Economist,
    },
    {
      path: '/bbc',
      component: BBC,
    },
    {
      path: '/cnn',
      component: CNN,
    },
    {
      path: '/subscription',
      component: Subscription,
    },
  ],
})

export default router
