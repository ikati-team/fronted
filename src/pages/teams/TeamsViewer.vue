<template>
  <main>
    <img class="avatar" alt="team avatar" src="https://thumbs.dreamstime.com/b/cute-cat-portrait-square-photo-beautiful-white-closeup-105311158.jpg">
    <div class="main">
      <h1>Ikati</h1>
      <h2>🚀 Мы делаем жизнь людей проще</h2>
      <ul class="list-group">
        <li class="list-group-item">
          <p>Котик 🐈 <router-link :to="{ name: 'UsersViewer', params: { id: 1 } }">@leo2r</router-link></p>
          <p>📧 <a href="mailto:leo2r@ikati.space">leo2r@ikati.space</a></p>
        </li>
        <li class="list-group-item">
          <p>Хозяйн 🧑 <router-link :to="{ name: 'UsersViewer', params: { id: 2 } }">@beavernotacat</router-link></p>
          <p>📧 <a href="mailto:beavernotacat@ikati.space">beavernotacat@ikati.space</a></p>
        </li>
        <li class="list-group-item">
          <p>Оператор 🎥 <router-link :to="{ name: 'UsersViewer', params: { id: 2 } }">@Bazzzber</router-link></p>
          <p>📧 <a href="mailto:Bazzzber@ikati.space">Bazzzber@ikati.space</a></p>
        </li>
      </ul>
      <button style="margin-top: 16px" class="btn btn-dark">Подать запрос на присоединение</button>
    </div>
  </main>
</template>

<script>
export default {
  name: "TeamsViewer"
}
</script>

<style scoped>
@import "@/assets/viewers.css";
</style>