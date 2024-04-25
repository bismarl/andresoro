import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ResumeView from '../views/ResumeView.vue'
import PublicationsView from '../views/PublicationsView.vue'
import TeachingView from '../views/TeachingView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/resume',
      name: 'Resume',
      component: ResumeView
    },
    {
      path: '/publications',
      name: 'Publications',
      component: PublicationsView
    },
    {
      path: '/teaching',
      name: 'Teaching',
      component: TeachingView
    },
  ]
})

export default router
