

<script setup lang='ts'>

import {useStore} from 'vuex'
import {computed} from "vue";

const store = useStore()


const loginData :{loginID:String, loginPW:String} = {
  loginID: "",
  loginPW: "",
}

const loggedIn = computed(()=> store.state.connection.loggedIn)

function onLoginClick() {
  if(!loggedIn.value) {
    store.dispatch('connection/loginRequest', loginData)
  }
  else {
    store.dispatch('connection/logout')
  }
}


</script>

<template>
  <div>
    <p id="login-text">Login</p>
    <input class="login-field" id="login-id" type="text" placeholder="ID" v-model="loginData.loginID">
    <input class="login-field" id="login-pw" type="password" placeholder="Password" v-model="loginData.loginPW">
    <button class="login-button" @click="onLoginClick"> {{  !loggedIn ? "Login" : "Logout" }} </button>
  </div>
</template>


<style scoped>

#login-text {
  position: absolute;
  left:50%;
  transform:translateX(-50%);
}

.login-field {
  position:absolute;
  height:20px;
  width: 70%;
  border-radius: 5px;
  background-color: white;
  border-color: deepskyblue;
  left:50%;
  transform:translateX(-50%);
}

.login-field:focus {
  outline: none;
  box-shadow: 0 0 5px deepskyblue;
}

#login-id{
  top:30%;
}

#login-pw{
  top: 50%;
}

.login-button {
  position:absolute;
  top:70%;
  height: 15%;
  width: 50px;
  border: 1px solid deepskyblue;
  border-radius: 3px;
  background-color : white;
  color: deepskyblue;
  right:15%;
}

.login-button:hover {
  background-color: deepskyblue;
  color: white;
}

</style>