import { createRouter, createWebHistory } from 'vue-router';
import TeamsViewer from "@/pages/teams/TeamsViewer.vue";
import UsersViewer from "@/pages/users/UsersViewer.vue";

const routes = [
  { path: "/team/:id", name: 'TeamsViewer', component: TeamsViewer },
  { path: "/user/:id", name: 'UsersViewer', component: UsersViewer }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export { router }