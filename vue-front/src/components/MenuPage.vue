

<script setup>

import { ref, computed } from 'vue'
import gsap from 'gsap'

defineProps({
  show : Boolean
})

const menuList = (['a', 'be', 'c', 'd', 'e', 'f', 'g' ])

const searchText = ref('')

const filteredList = computed( () => {

  let data = menuList

  if(searchText.value){
    let key = searchText.value.toLowerCase()
    data = data.filter( (row) => {
      return ( row.toLowerCase().indexOf(key) > -1 )
    })
  }

  return data
})

function onEnter(el, done){
  gsap.from(el, {
    opacity: 0,
    height: '0px',
    x: '30px',
    delay: el.dataset.index * 0.05,
    onComplete: done
  })
}
function onLeave(el, done){
  gsap.to(el, {
    opacity: 0,
    height: '0px',
    delay: el.dataset.index * 0.05,
    onComplete: done
  })
}


</script>

<template>
  <div>
  <Teleport to="body">

    <Transition name="menu-page" duration="400">

    <div class="menu-page" v-if="show">

      <button class="menu-button" @click="$emit('close')"> </button>
      <input class="menu-search" type="text" v-model="searchText">

      <div class="menu-list" >

        <TransitionGroup name="menu-list" :css="false" @enter="onEnter" @leave="onLeave" appear>
        <div class="menu" v-for="(menu, index) in filteredList" :key="menu" :data-index="index">
          {{ menu }}
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

.menu {
  height:20px;
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
  top: 5%;
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