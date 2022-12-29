<template>
  <div class="bg">
    <form class="card">
      <div class="mb-3">
        <label for="email" class="form-label">Адрес электронной почты</label>
        <input v-model="login" type="email" class="form-control" id="email" placeholder="leo2r@ikati.space">
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Пароль</label>
        <input v-model="password" type="password" class="form-control" id="password" placeholder="S3CuR3D_P422WORd">
      </div>
      <button type="button" class="btn btn-light" @click="checkAuth">Продолжить</button>
    </form>
  </div>
</template>

<script>
import { post } from '@/apiWrapper/fetch'

export default {
  name: "Login",
  data() {
    return {
      login: "",
      password: ""
    }
  },
  methods: {
    checkAuth () {
      let credentials = new FormData();
      credentials.append('username', this.login);
      credentials.append('password', this.password);
      post('login/', {}, credentials)
    }
  }
}
</script>

<style scoped>
@import "@/assets/auth/form.css";
</style>