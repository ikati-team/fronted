<template>
  <main>
    <img class="avatar" alt="team avatar" src="https://thumbs.dreamstime.com/b/cute-cat-portrait-square-photo-beautiful-white-closeup-105311158.jpg">
    <div class="main">
      <h1>{{ team.name }}</h1>
      <h2>{{ team.public_message }}</h2>
      <article>{{ team.description }}</article>
      <ul class="list-group">
        <li class="list-group-item" v-for="member in team.team_member">
          <p><router-link :to="{ name: 'UsersViewer', params: { id: member.user.id } }">@{{ member.user.username }}</router-link></p>
          <p>{{ member.role }}</p>
        </li>
      </ul>
      <button style="margin-top: 16px" class="btn btn-dark">Подать запрос на присоединение</button>
    </div>
  </main>
</template>

<script>
import { get } from "@/apiWrapper/fetch";

export default {
  name: "TeamsViewer",
  data () {
    return {
      team: {}
    }
  },
  beforeMount() {
    get( 'teams/' + this.$route.params.id).then((response) => {
      this.team = response
    })
  }
}
</script>

<style scoped>
@import "@/assets/viewers.css";
</style>