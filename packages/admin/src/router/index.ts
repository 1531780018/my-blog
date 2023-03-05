import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import("@/views/Index/index.vue")
  }
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})
