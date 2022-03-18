import {createWebHistory, createRouter} from 'vue-router'
import Home from '../components/HomeComp.vue'
import About from '../components/AboutMe.vue'

const routes = [
  {
    name: 'Home',
    path: '/home',
    component: Home 
  },
  {
    name: 'About',
    path: '/about',
    component: About 
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes 
}) 

export default router