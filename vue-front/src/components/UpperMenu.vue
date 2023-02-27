

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import LoginMenu from './LoginMenu.vue'
import UserInfo from './UserInfo.vue'


const store = useStore()

const components = {
  false: LoginMenu,
  true: UserInfo
}


const title = computed(() => store.state.currentPage)
const loggedIn = computed(() => store.state.connection.loggedIn)


const menuOpen = ref(false)

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}


</script>


<template>
  <div class="upper-menu">
    <span id="title">{{title}}</span>
    <button id="menu-button" @click="toggleMenu"> {{loggedIn ? "User" : "Login"}}</button>

    <Transition name="menu">
      <div id="menu-page" v-show="menuOpen" >
        <component :is="components[loggedIn]"/>
      </div>
    </Transition>
  </div>
</template>



<style scoped>

#menu-page {
  position:absolute;
  top:150%;
  right: 5%;
  background-color: white;
  border: 1px solid deepskyblue;
  border-radius: 10px;
  width:300px;
  height:200px;
}

#title {
  position:absolute;
  top:50%;
  transform:translateY(-50%);
  left:50px;
  font-size:x-large;
  font-weight: 500;
  color: darkblue;

}

#menu-button {
  position:absolute;
  right: 5%;
  top: 25%;
  height: 50%;
  width: 50px;
  border: 1px solid deepskyblue;
  border-radius: 3px;
  background-color : white;
  color: deepskyblue;
}

.menu-enter-active,
.menu-leave-active {
  transition: opacity 0.5s ease;
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
}

</style>