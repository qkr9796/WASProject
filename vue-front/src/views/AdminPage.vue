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

    <div>
      <p> create Key </p>
      <input type="text" v-model="requestKey" placeholder="request key">
      <button @click="onRequestKey"> request </button>
      <p> created : {{ keyResponse }}</p>
    </div>

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

const requestKey = ref('')
const keyResponse = ref('')


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

function onRequestKey(){
  store.dispatch('connection/postData', {url: 'createKey', data: { key:requestKey.value}})
      .then((r) => {
        keyResponse.value = r.data
      })
}



</script>

<style scoped>

</style>