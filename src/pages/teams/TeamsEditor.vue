<template>
  <main>
    <img class="avatar" alt="team avatar" src="https://thumbs.dreamstime.com/b/cute-cat-portrait-square-photo-beautiful-white-closeup-105311158.jpg">
    <div class="main">
      <input v-model="name" placeholder="Название команды" class="header-input" id="name">
      <input v-model="slogan" placeholder="Слоган" id="slogan">
      <input v-model="role" placeholder="Ваша роль" id="role">
      <button style="margin-top: 16px" class="btn btn-dark" @click="save">Сохранить</button>
    </div>
  </main>
</template>

<script>
import { post } from "@/apiWrapper/fetch";

export default {
  name: "TeamsViewer",
  data () {
    return {
      name: '',
      slogan: '',
      role: '',
      members: []
    }
  },
  methods: {
    save () {
      let teamData = new FormData()
      teamData.append('name', this.name)
      teamData.append('public_message', this.slogan)
      teamData.append('role', this.role)

      post('team_create/', teamData).then((response) => {
        this.$router.push({ name: 'TeamsViewer', params: { id: response.id } })
      })
    }
  }
}
</script>

<style scoped>
@import "@/assets/viewers.css";
@import "@/assets/editors.css";
</style>