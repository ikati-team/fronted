import { createRouter, createWebHistory } from 'vue-router';
import TeamsViewer from "@/pages/teams/TeamsViewer.vue";
import TeamsEditor from "@/pages/teams/TeamsEditor.vue";
import UsersViewer from "@/pages/users/UsersViewer.vue";

const routes = [
  { path: "/team/edit", name: 'TeamsEditor', component: TeamsEditor },
  { path: "/team/:id", name: 'TeamsViewer', component: TeamsViewer },
  { path: "/user/:id", name: 'UsersViewer', component: UsersViewer }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export { router }