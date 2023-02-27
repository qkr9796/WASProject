<template>
  <div>
    <p> Register </p>
    <input type="text" v-model="createKey" placeholder="Key">
    <input type="text" v-model="userid" placeholder="ID">
    <input type="text" v-model="password" placeholder="password">
    <button @click="onRegister"> Register </button>
    <p> {{ regResult }}</p>

    <MenuButton />



  </div>

</template>

<script setup lang="ts">

import { useStore } from 'vuex'
import { ref } from 'vue'
import MenuButton from '../components/MenuButton.vue'


const store = useStore()

const createKey = ref('')
const userid = ref('')
const password = ref('')
const regResult =ref('')


function onRegister(){
  store.dispatch('connection/postData',
      {url: 'register', data: { key: createKey.value, userid: userid.value, password: password.value }} )
      .then( (r) => {
        regResult.value = r.data
      })
}

</script>

<style scoped>

</style>