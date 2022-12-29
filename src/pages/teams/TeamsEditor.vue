<template>
  <main>
    <img class="avatar" alt="team avatar" src="https://thumbs.dreamstime.com/b/cute-cat-portrait-square-photo-beautiful-white-closeup-105311158.jpg">
    <div class="main">
      <input :value="name" placeholder="Название команды" class="header-input" id="name">
      <input :value="slogan" placeholder="Слоган" id="slogan">
      <ul class="list-group" v-for="member in members">
        <li class="list-group-item">
          <p>
            <input :value="member.jobTitle" placeholder="Должность" id="job">
            <router-link :to="{ name: 'UsersViewer', params: { id: member.id } }">@{{ member.nick }}</router-link>
          </p>
          <p>📧 <a :href="`mailto:${member.mail}`">{{ member.mail }}</a></p>
        </li>
        <li class="list-group-item">
          + Ещё участник
        </li>
      </ul>
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
      members: []
    }
  },
  methods: {
    save () {
      let teamData = new FormData();
      teamData.append('name', this.name);
      teamData.append('description', this.slogan);

      post('teams/', teamData)
    }
  }
}
</script>

<style scoped>
@import "@/assets/viewers.css";
@import "@/assets/editors.css";
</style>