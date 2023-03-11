import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/admin',
    name: 'admin',
    component: () => import("@/views/Index/index.vue"),
    children: [
      {
        path: '/admin/editPost',
        name: "editPost",
        component: () => import("@/views/Post/postEdit.vue"),
      },
      {
        path: '/admin/postManage',
        name: "postManage",
        component: () => import("@/views/Post/postManage.vue"),
      },
      {
        path: '/admin/cateManage',
        name: "cateManage",
        component: () => import("@/views/Classify/index.vue"),
      }
    ]
  },
  {
    path: '/',
    name: "index",
    component: () => import("@/views/Main/index.vue"),
  },
]

export default createRouter({
  history: createWebHistory(),
  routes
})
