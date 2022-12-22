<template>
  <main>
    <img class="avatar" alt="team avatar" src="https://thumbs.dreamstime.com/b/cute-cat-portrait-square-photo-beautiful-white-closeup-105311158.jpg">
    <div class="main">
      <h1>leo2r</h1>
      <h2>📧 <a href="mailto:leo2r@ikati.space">leo2r@ikati.space</a></h2>
      <ul class="list-group">
        <li class="list-group-item">
          <p>Котик 🐈 в <router-link :to="{ name: 'TeamsViewer', params: { id: 1 } }">Ikati</router-link></p>
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
import '@/assets/viewers.css'

export default {
  name: "UsersViewer"
}
</script>

<style scoped>

</style>