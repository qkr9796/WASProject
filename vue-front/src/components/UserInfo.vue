<template>
  <div>
    <p> Username : {{ userid }}</p>
    <button @click="onLogout"> logout </button>
  </div>

</template>

<script setup lang="ts">

import { useStore } from 'vuex'


const store = useStore()

const userid = store.state.connection.userid


function onLogout(){
  store.dispatch('connection/logout')
}


</script>

<style scoped>


</style>