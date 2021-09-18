import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import Opening from '../Views/example0.vue'
import Example from '../Views/example1.vue'
import Example2 from '../Views/example2.vue'
import Example3 from '../Views/example3.vue'

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/tailwind',
    name: 'Opening',
    component: Opening
  },
  {
    path: '/example1',
    name: 'Example-1',
    component: Example
  },
  {
    path: '/example2',
    name: 'Example-2',
    component: Example2
  },
  {
    path: '/example3',
    name: 'Example-3',
    component: Example3
  },
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router