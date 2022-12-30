<template>
  <!-- Button trigger modal -->
  <button type="button" class="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Пригласить в команду
  </button>

  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">В какую команду пригласить?</h5>
          <button type="button" class="btn close" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <ul class="list-group">
          <li class="radio-chose-element" v-for="team in teams">
            <input class="form-check-input" type="radio" :name="team.id" :id="team.id" :value="team.id" v-model="picked">
            <label class="form-check-label list-group-item" :for="team.id">
              <img class="avatar" alt="team avatar" src="https://thumbs.dreamstime.com/b/cute-cat-portrait-square-photo-beautiful-white-closeup-105311158.jpg">
              <h2>{{ team.name }}</h2>
              <p>{{ team.description }}</p>
            </label>
          </li>
        </ul>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click.native="sendInvite">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { get, post } from "@/apiWrapper/fetch";

export default {
  name: "TeamChooser",
  props: ['user_id'],
  data () {
    return {
      teams: [],
      picked: 0
    }
  },
  methods: {
    sendInvite() {
      let inviteData = new FormData()
      inviteData.append('team', '/teams/' + this.picked + '/')
      inviteData.append('target', '/users/' + this.user_id + '/')
      post('invite_create/', inviteData)
    }
  },
  beforeMount() {
    get( 'current_user_teams/').then((response) => {
      this.teams = response
    })
  }
}
</script>

<style scoped>
@import "@/assets/lists.css";
</style>