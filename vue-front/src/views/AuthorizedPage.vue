<template>
  <div>
    <h1> Authorized Page Test </h1>
    <p> logged in = {{ loggedIn }}</p>

    <div>
      <input type="text" v-model="inputText" placeholder="url">
      <input type="text" v-model="inputData" placeholder="data">
      <button @click="onGet"> send GET </button>
      <button @click="onPost"> send POST </button>
    </div>

    <p> {{ res }} </p>

    <MenuButton/>


  </div>

</template>

<script setup lang="ts">

import {useStore} from 'vuex'
import {computed, ref} from 'vue'
import {useRouter} from 'vue-router'
import MenuButton from '../components/MenuButton.vue'

const store = useStore()
const router = useRouter()

const inputText = ref('')
const inputData = ref('')
const res = ref('')

const loggedIn = computed( () => store.state.connection.loggedIn)

if(!loggedIn.value){
  router.push('/login')
}

function onGet() {
  store.dispatch("connection/getData", {url: inputText.value})
      .then((r) => {
        res.value = r.data
      })

}

function onPost() {
  store.dispatch("connection/postData", {url: inputText.value, data: inputData.value})
      .then((r) => {
        res.value = r.data
      })
}



</script>

<style scoped>

</style>