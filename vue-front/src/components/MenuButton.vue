

<script setup lang="ts">

import {useStore} from 'vuex'
import {computed} from "vue";


const store = useStore()

const isOpen = computed<Boolean>(() => store.state.menuOpen)

function toggle(){
  store.commit('toggleMenu')
}


</script>


<template>
  <div>
    <Transition>
  <button class="menu-button"
          v-show="!isOpen"
           @click="toggle"> </button>
    </Transition>

  </div>
</template>

<style scoped>

.v-enter-active,
.v-leave-active{
  transition:all 0.2s ease;
}

.v-enter-active{
  transition-delay: 0.4s;
}

.v-enter-from,
.v-leave-to{
  transform:translateX(20px);
  opacity: 0;
}

.menu-button {
  background-color: #42b983;
  height: 60px;
  width: 60px;
  border-radius: 20px;
  border-width:1px;
}


</style>