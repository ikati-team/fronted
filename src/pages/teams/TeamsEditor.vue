<template>
  <main>
    <div class="img">
      <img class="avatar" alt="team avatar" src="https://thumbs.dreamstime.com/b/cute-cat-portrait-square-photo-beautiful-white-closeup-105311158.jpg">
      <input type="file" class="form-control">
    </div>
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
      <button style="margin-top: 16px" class="btn btn-dark">Сохранить</button>
    </div>
  </main>
</template>

<script>
import '@/assets/viewers.css'
import '@/assets/editors.css'

export default {
  name: "TeamsViewer",
  data () {
    return {
      name: 'Ikati',
      slogan: '🚀 Мы делаем жизнь людей проще',
      members: [
        {
          id: 1,
          nick: 'leo2r',
          jobTitle: 'Котик 🐈',
          mail: 'leo2r@ikati.space'
        },
        {
          id: 2,
          nick: 'beavernotacat',
          jobTitle: 'Хозяйн 🧑',
          mail: 'beavernotacat@ikati.space'
        },
        {
          id: 3,
          nick: 'Bazzzber',
          jobTitle: 'Оператор 🎥',
          mail: 'Bazzzber@ikati.space'
        },
      ]
    }
  }
}
</script>

<style scoped>
</style>