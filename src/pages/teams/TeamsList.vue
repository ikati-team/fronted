<template>
  <ul class="list-group">
    <li class="list-group-item" v-for="team in teams">
      <img class="avatar" alt="team avatar" src="https://thumbs.dreamstime.com/b/cute-cat-portrait-square-photo-beautiful-white-closeup-105311158.jpg">
      <router-link :to="{ name: 'TeamsViewer', params: { id: team.id } }"><h2>{{ team.name }}</h2></router-link>
      <p>{{ team.description }}</p>
    </li>
  </ul>
</template>

<script>
import { get } from "@/apiWrapper/fetch";

export default {
  name: "TeamsList",
  data () {
    return {
      teams: {}
    }
  },
  beforeMount() {
    get( 'current_user_teams/').then((response) => {
      this.teams = response
    })
  }
}
</script>

<style scoped>
@import "@/assets/lists.css";
</style>