

<script setup lang="ts">

import UpperMenu from "./components/UpperMenu.vue"
import MenuPage from './components/MenuPage.vue'

</script>

<template>

  <UpperMenu class="upper-menu"  />

  <div class="page-content">
    <router-view />
  </div>

  <MenuPage />

</template>


<style scoped>

.upper-menu {
  background-color: #42b983;
  position: fixed;
  height: 50px;
  width: 100%;
}

.page-content {
  padding-top:50px;
}

</style>

<style>

body {
  margin: 0;
  padding: 0;
}

</style>