

<script setup lang="ts">

import {ref,provide} from 'vue'
import UpperMenu from "./components/UpperMenu.vue"
import MenuButton from "./components/MenuButton.vue"
import MenuPage from './components/MenuPage.vue'

const menuOpen = ref<Boolean>(false)


const loggedIn = ref<Boolean>(false)

provide('menu', menuOpen)
provide('loggedIn', loggedIn)

</script>

<template>
  <div>
    <UpperMenu title="test" />
  </div>

  <div class="menu-button">
    <MenuButton />
  </div>

  <MenuPage />

</template>


<style scoped>

.menu-button {
  position:absolute;
  left:50%;
  top:50%;
  transform:translateX(-50%);
}

</style>

<style>

body {
  margin: 0;
  padding: 0;
}

</style>