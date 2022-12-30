<template>
  <ul class="list-group">
    <li class="list-group-item" v-for="invite in invites">
      <img class="avatar" alt="team avatar" src="https://thumbs.dreamstime.com/b/cute-cat-portrait-square-photo-beautiful-white-closeup-105311158.jpg">
      <router-link :to="{ name: 'TeamsViewer', params: { id: invite.team.id } }"><h2>{{ invite.team.name }}</h2></router-link>
      <p>{{ invite.team.description }}</p>

      <div class="buttons">
        <button class="btn btn-danger" @click="decline(invite.id)">Отклонить</button>
        <button class="btn btn-success" style="grid-column-start: 2" @click="accept(invite.id)">Принять</button>
      </div>
    </li>
  </ul>
</template>

<script>
import { get, delete_fetch } from "@/apiWrapper/fetch";

export default {
  name: "InvitationList",
  data () {
    return {
      invites: {}
    }
  },
  methods: {
    load() {
      get( 'invites/').then((response) => {
        this.invites = response
      })
    },
    accept(id) {
      // TODO
      this.load()
    },
    decline(id) {
      delete_fetch('invites/' + id + '/')
      this.load()
    }
  },
  beforeMount() {
    this.load()
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