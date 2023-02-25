<template>
  Home
  <div class="menu-button">
    <MenuButton />
  </div>
</template>

<script setup>

import MenuButton from '../components/MenuButton.vue'

</script>

<style scoped>

.menu-button {
  position:absolute;
  left:50%;
  top:50%;
  transform:translateX(-50%);
}

</style>