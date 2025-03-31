import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  { path: `${import.meta.env.BASE_URL}/`,  component: () => import('../views/Home.vue')},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export {
    router
} 