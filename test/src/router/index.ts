import Vue from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
 
import Home from '../components/Home.vue'
 
export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path : '/',
      name : 'Home',
      component: Home
    },
  ]
})

export default router