import { createRouter, createWebHistory } from 'vue-router';
import TeamsViewer from "@/pages/teams/TeamsViewer.vue";
import TeamsList from "@/pages/teams/TeamsList.vue";
import TeamsEditor from "@/pages/teams/TeamsEditor.vue";
import UsersViewer from "@/pages/users/UsersViewer.vue";
import UsersList from "@/pages/users/UsersList.vue";
import Login from "@/pages/auth/Login.vue";

const routes = [
  { path: "/team/new", name: 'TeamsEditor', component: TeamsEditor },
  { path: "/team/my", name: 'TeamsList', component: TeamsList },
  { path: "/team/:id", name: 'TeamsViewer', component: TeamsViewer },
  { path: "/user/:id", name: 'UsersViewer', component: UsersViewer },
  { path: "/user/", name: 'UserViewer', component: UsersList },

  { path: "/login/", name: 'Login', component: Login }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export { router }