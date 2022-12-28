<template>
  <main>
    <img class="avatar" alt="team avatar" src="https://thumbs.dreamstime.com/b/cute-cat-portrait-square-photo-beautiful-white-closeup-105311158.jpg">
    <div class="main">
      <h1>@{{ user.username }}</h1>
      <p>{{ user.first_name }} {{ user.second_name }}</p>
      <a :href="`https://yandex.ru/maps/?text=${user.profile.city}`">📍 {{ user.profile.city }}</a>
      <p><span>📧 <a href="mailto:leo2r@ikati.space">leo2r@ikati.space</a></span></p>
      <h2>Навыки</h2>
      <ul class="list-group">
        <li class="list-group-item" v-for="skill in user.profile.skill">
          <h3>{{ skill.name }}</h3>
          <p>{{ skill.description }}</p>
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
import {get} from "@/apiWrapper/fetch";

export default {
  name: "UsersViewer",
  data () {
    return {
      user: {}
    }
  },
  beforeMount() {
    get( 'users/' + this.$route.params.id).then((response) => {
      this.user = response
    })
  }
}
</script>

<style scoped>
@import "@/assets/viewers.css";
</style>