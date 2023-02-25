

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
  if(!store.state.connection.loggedIn) {
    store.dispatch('connection/loginRequest', loginData)
        .then((r) => {
          if (r.data == 'loginSuccess') {
            store.commit('connection/setLoggedIn', true)
          }
        })
  }
}



</script>

<template>
  <div class="login_page">
    <p id="login_text">Login</p>
    <input class="login_field" id="login_id" type="text" placeholder="ID" v-model="loginData.loginID">
    <input class="login_field" id="login_pw" type="password" placeholder="Password" v-model="loginData.loginPW">
    <button class="login_button" @click="onLoginClick"> {{  !loggedIn ? "Login" : "Logout" }} </button>
  </div>
</template>


<style scoped>

.login_page {
  position:relative;
  background-color: white;
  border: 1px solid deepskyblue;
  border-radius: 10px;
  width:300px;
  height:200px;
}

#login_text {
  position: absolute;
  left:50%;
  transform:translateX(-50%);
}

.login_field {
  position:absolute;
  height:20px;
  width: 70%;
  border-radius: 5px;
  background-color: white;
  border-color: deepskyblue;
  left:50%;
  transform:translateX(-50%);
}

.login_field:focus {
  outline: none;
  box-shadow: 0 0 5px deepskyblue;
}

#login_id{
  top:30%;
}

#login_pw{
  top: 50%;
}

.login_button {
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

.login_button:hover {
  background-color: deepskyblue;
  color: white;
}

</style>