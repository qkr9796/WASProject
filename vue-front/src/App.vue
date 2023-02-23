

<script setup>

import {ref} from 'vue'
import UpperMenu from "./components/UpperMenu.vue"
import MenuButton from "./components/MenuButton.vue"
import MenuPage from './components/MenuPage.vue'

const menuOpen = ref(false)

</script>

<template>
  <div>
    <UpperMenu title="test" />
  </div>

  <div class="menu-button">
    <MenuButton :is-open="menuOpen" @click="menuOpen = !menuOpen"/>
    <MenuButton :is-open="menuOpen" @click="menuOpen = !menuOpen"/>
    <MenuButton :is-open="menuOpen" @click="menuOpen = !menuOpen"/>
  </div>

  <MenuPage :show="menuOpen" @close="menuOpen = false" />

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