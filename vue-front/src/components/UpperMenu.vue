

<script setup>
import { ref } from 'vue';
import LoginMenu from './LoginMenu';

const props = defineProps(['title'])

const loginOpen = ref(false)

function toggleLogin() {
  loginOpen.value = !loginOpen.value
}

</script>


<template>
  <Transition name="upper" appear>
  <div class="upper_menu">
    <span id="title">{{props.title}}</span>
    <button id="login_button" @click="toggleLogin"> Login </button>

    <Transition name="login">
      <LoginMenu id="login_page" v-show="loginOpen"/>
    </Transition>
  </div>
  </Transition>
</template>



<style scoped>



.upper_menu{
  height: 50px;
  width: 100%;
  position: fixed;
  background-color: #42b983;
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

.upper-enter-active{
  transition: all 0.3s ease;
}

.upper-enter-from{
  transform: translateY(-50px);
  opacity: 0;
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