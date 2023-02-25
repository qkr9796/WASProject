

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useStore } from 'vuex'
import LoginMenu from './LoginMenu';

const title = computed( () => useStore().state.currentPage)

const loginOpen = ref<Boolean>(false)

function toggleLogin() {
  loginOpen.value = !loginOpen.value
}

</script>


<template>
  <div class="upper_menu">
    <span id="title">{{title}}</span>
    <button id="login_button" @click="toggleLogin"> Login </button>

    <Transition name="login">
      <LoginMenu id="login_page" v-show="loginOpen"/>
    </Transition>
  </div>
</template>



<style scoped>

#title {
  position:absolute;
  top:50%;
  transform:translateY(-50%);
  left:50px;
  font-size:x-large;
  font-weight: 500;
  color: darkblue;

}

#login_button {
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

#login_page {
  position:absolute;
  top:150%;
  right: 5%;
}

.login-enter-active,
.login-leave-active {
  transition: opacity 0.5s ease;
}

.login-enter-from,
.login-leave-to {
  opacity: 0;
}

</style>