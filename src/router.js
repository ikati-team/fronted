import { createRouter, createWebHistory } from 'vue-router';
import Viewer from "@/pages/teams/Viewer.vue";

const routes = [
  { path: "/team/:id", name: 'TeamViewer', component: Viewer },
  { path: "/user/:id", name: 'UserViewer', component: Viewer }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export { router }