import { createRouter, createWebHistory } from 'vue-router';
import TeamsViewer from "@/pages/teams/TeamsViewer.vue";
import TeamsEditor from "@/pages/teams/TeamsEditor.vue";
import UsersViewer from "@/pages/users/UsersViewer.vue";
import UsersList from "@/pages/users/UsersList.vue";

const routes = [
  { path: "/team/edit", name: 'TeamsEditor', component: TeamsEditor },
  { path: "/team/:id", name: 'TeamsViewer', component: TeamsViewer },
  { path: "/user/:id", name: 'UsersViewer', component: UsersViewer },
  { path: "/user/", name: 'UserViewer', component: UsersList }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export { router }