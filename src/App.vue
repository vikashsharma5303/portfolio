<template>
  <div class="relative h-screen w-screen p-0 m-0 dark:bg-gradient-to-t dark:from-[#15161a] dark:to-[#2b2d36] bg-white text-[#213547] dark:text-white flex flex-col">
    <div class="h-14 w-full fixed z-50 dark:bg-transparent bg-white text-[#213547] dark:text-white">
      <Navbar></Navbar>
    </div>
    <div class="grow flex h-full w-full overflow-y-auto dark:bg-transparent  bg-white text-[#213547] dark:text-white mt-14">
      <RouterView></RouterView>
    </div>
    <Transition name="bounce">
      <DialogView v-if="!baseStore.isCloseDialog">
        <RouterLink v-for="link in navigationLinks" :to="{ name: link.name }" @click="baseStore.setCloseDialog(true)"
          :class="['dark:hover:text-black focus:outline-0 w-28 py-2 my-3 hover:bg-gray-100 rounded-lg',]">
          {{ link.label }}
        </RouterLink>
      </DialogView>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import DialogView from './components/DialogView.vue';
import { useBaseStore } from './store';

const baseStore = useBaseStore()

// Top Navigation links
const navigationLinks = [{
  name: 'home',
  color: 'bg-amber-500',
  label: 'Home'
}, {
  name: 'about',
  color: 'bg-green-500',
  label: 'About'
}, {
  name: 'project',
  color: 'bg-amber-500',
  label: 'Projects'
}, {
  name: 'skills',
  color: 'bg-slate-300',
  label: 'Skills'
}]


</script>
  

<style>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}

.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.25);
  }

  100% {
    transform: scale(1);
  }
}


button {
  border-width: 0;
}
</style>