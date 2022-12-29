<template>
  <div class="bg">
    <form class="card">
      <p v-if="wrong" class="p-3 mb-2 bg-danger text-white rounded">🤔 Где-то ошибка</p>
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
      password: "",
      wrong: false
    }
  },
  methods: {
    checkAuth () {
      this.wrong = false
      let credentials = new FormData();
      credentials.append('username', this.login);
      credentials.append('password', this.password);
      post('auth/jwt/create/', credentials).then((response) => {
        localStorage.setItem("token", response.access)
        if (this.$route.query.back !== undefined) {
          this.$router.push(this.$route.query.back)
        } else {
          this.$router.push('/')
        }
      }).catch(() => {
        this.wrong = true
      })
    }
  }
}
</script>

<style scoped>
@import "@/assets/auth/form.css";
</style>