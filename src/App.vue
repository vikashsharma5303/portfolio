<template>
  <div class="h-screen w-screen p-0 m-0 dark:bg-[#213547] bg-white">
    <div class="h-[5%]">
      <Navbar></Navbar>
    </div>
    <div class="'h-[95%]'">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script setup lang="ts">
import Navbar from './components/Navbar.vue'


</script>
  