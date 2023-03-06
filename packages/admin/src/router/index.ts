import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import("@/views/Index/index.vue"),
    children: [
      {
        path: '/addPost',
        component: () => import("@/views/Post/postAdd.vue"),
      }
    ]
  }
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})
