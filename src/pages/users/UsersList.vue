<template>
  <main>
    <ul class="list-group">
      <li class="list-group-item" v-for="(user, id) in users">
        <img class="avatar" alt="team avatar" src="https://thumbs.dreamstime.com/b/cute-cat-portrait-square-photo-beautiful-white-closeup-105311158.jpg">
        <!-- ⚠️ TODO: fetch user id from API -->
        <h2><router-link :to="{ name: 'UsersViewer', params: { id: id + 1 } }">@{{ user.username }}</router-link><span class="preference-role">({{ user.profile.preference_role }})</span></h2>
        <div class="skills">
          Может:
          <ul>
            <li v-for="skill in user.profile.skill" :title="skill.description">{{ skill.name }}</li>
          </ul>
        </div>
        <p>📧 <a :href="`mailto:${user.email}`">{{ user.email }}</a></p>
      </li>
    </ul>
  </main>
</template>

<script>
import '@/assets/lists.css'
export default {
  name: "UsersList",
  data () {
    return {
      users: [
        {
          "username": "leo2r",
          "first_name": "",
          "last_name": "",
          "email": "leo2r@ikati.space",
          "profile": {
            "city": "Владивосток",
            "biography": "",
            "skill": [
              {
                "name": "Мяукать",
                "description": "Издовать кошачьи звуки"
              }
            ],
            "social_networks": [],
            "preference_role": "Котик"
          }
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>