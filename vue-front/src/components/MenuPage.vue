

<script setup lang="ts">

import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import gsap from 'gsap'
import {useStore} from 'vuex'


const store = useStore()
const router  = useRouter()

const show = computed<Boolean> ( () => store.state.menuOpen)
function toggle(){
  store.commit('toggleMenu')
}


const menuList = ([
  {
    text: 'main',
    link: "/"
  },
  {
    text: 'login',
    link: "/login"
  },
  {
    text: 'user',
    link: '/user'
  },
  {
    text: 'adminPage',
    link: "/admin"
  },
])

const searchText  = ref<String>('')

const filteredList = computed( () => {

  let data = menuList

  if(searchText.value){
    let key = searchText.value.toLowerCase()
    data = data.filter( (row) => {
      return ( row.text.toLowerCase().indexOf(key) > -1 )
    })
  }

  return data
})

function onEnter(el:SVGElement , done:Function):void{
  gsap.from(el, {
    opacity: 0,
    height: '0px',
    marginBottom: '0px',
    x: '30px',
    delay: parseInt(el.dataset.index as string) * 0.05,
    onComplete: done as gsap.Callback
  })
}
function onLeave(el:SVGElement, done:Function):void{
  gsap.to(el, {
    opacity: 0,
    height: '0px',
    marginBottom: '0px',
    delay: parseInt(el.dataset.index as string) * 0.05,
    onComplete: done as gsap.Callback
  })
}

function onClick(link:string){
  router.push({path: link})
}


</script>

<template>
  <div>
  <Teleport to="body">

    <Transition name="menu-page" duration="400">

    <div class="menu-page" v-if="show">

      <button class="menu-button" @click="toggle"> </button>
      <input class="menu-search" type="text" v-model="searchText">

      <div class="menu-list" >

        <TransitionGroup name="menu-list" :css="false" @enter="onEnter" @leave="onLeave" appear>
        <div class="menu-container" v-for="(menu, index) in filteredList" :key="menu.text" :data-index="index"  >
          <div class="menu" @click="onClick(menu.link)">
            {{ menu.text }}
          </div>
        </div>
        </TransitionGroup>


      </div>
    </div>
    </Transition>

  </Teleport>
  </div>
</template>



<style scoped>

.menu-button {
  position: absolute;
  background-color: #42b983;
  height: 60px;
  width: 60px;
  border-radius: 20px;
  border-width:1px;
  bottom: 5%;
  right: 5%;
}

.menu-container {
  height: 30px;
  width: 80%;
  margin-bottom: 15px;
}

.menu {
  border:1px solid grey;
  border-radius: 50px;
  padding-left: 5%;
  text-decoration-line: none;
  color: #42b983;
}


.menu-page {
  position: fixed;
  right: 5%;
  bottom: 5%;
  background-color: lightgrey;
  border: 1px solid black;
  border-radius: 20px;
  width: 40%;
  height: 60%;
}

.menu-search {
  position:absolute;
  height:30px;
  top: 5%;
  width: 80%;
  border-radius: 20px;
  background-color: lightgrey;
  border-color: deepskyblue;
  left:50%;
  transform:translateX(-50%);
}

.menu-search:focus {
  outline: none;
  box-shadow: 0 0 5px deepskyblue;
}

.menu-list {
  position:absolute;
  width:70%;
  top: 10%;
  left: 10%;
  transform:translateY(50px);
}





.menu-page-enter-active,
.menu-page-leave-active {
  transition: all 0.2s ease-in;
}
.menu-page-leave-active {
  transition-delay: 0.2s;
}

.menu-page-enter-from,
.menu-page-leave-to {
  transform: translateY(-50px);
  opacity: 0;
}

.menu-page-enter-active .menu-button,
.menu-page-leave-active .menu-button{
  transition: all 0.2s ease-in;
}
.menu-page-enter-active .menu-button {
  transition-delay: 0.2s;
}

.menu-page-enter-from .menu-button,
.menu-page-leave-to .menu-button {
  transform: translateX(-20px);
  opacity: 0;
}

.menu-page-enter-active .menu-search,
.menu-page-leave-active .menu-search {
  transition: all 0.2s ease-in;
}
.menu-page-enter-active .menu-search {
  transition-delay: 0.2s;
}

.menu-page-enter-from .menu-search,
.menu-page-leave-to .menu-search {
  opacity: 0;
}

</style>