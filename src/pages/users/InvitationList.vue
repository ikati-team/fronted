<template>
  <ul class="list-group">
    <li class="list-group-item" v-for="invite in invites">
      <img class="avatar" alt="team avatar" src="https://thumbs.dreamstime.com/b/cute-cat-portrait-square-photo-beautiful-white-closeup-105311158.jpg">
      <router-link :to="{ name: 'TeamsViewer', params: { id: invite.team.id } }"><h2>{{ invite.team.name }}</h2></router-link>
      <p>{{ invite.team.description }}</p>

      <div class="buttons">
        <button class="btn btn-danger">Отклонить</button>
        <button class="btn btn-success" style="grid-column-start: 2">Принять</button>
      </div>
    </li>
  </ul>
</template>

<script>
import { get } from "@/apiWrapper/fetch";

export default {
  name: "InvitationList",
  data () {
    return {
      invites: {}
    }
  },
  beforeMount() {
    get( 'invites/').then((response) => {
      this.invites = response
    })
  }
}
</script>

<style scoped>
@import "@/assets/lists.css";

.buttons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;
  max-width: 200px;
  margin-left: auto;
  margin-right: 8px;
}
</style>