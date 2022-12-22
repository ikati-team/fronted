<script setup>
</script>

<template>
  <header class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Ikati</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarText">
        <ul class="navbar-nav mb-2 mb-lg-0 ml-auto">
          <li class="nav-item">
            <a class="nav-link btn btn-outline-dark" aria-current="page" href="#">Создать</a>
          </li>
          <li class="nav-item">
            <a class="nav-link btn btn-outline-dark" href="#">Найти</a>
          </li>
          <li class="nav-item">
            <a class="nav-link btn btn-outline-dark" href="#">Моя команда</a>
          </li>
        </ul>
      </div>
    </div>
  </header>
  <router-view id="view"></router-view>
</template>

<style scoped>
.nav-item {
  margin: 0 4px 0 4px;
}
</style>
