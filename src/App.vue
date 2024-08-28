<template>
  <div class="flex flex-col h-screen bg-gray-100">
    <AppHeader class="flex-shrink-0" :isMenuOpen="isMenuOpen" @toggleMenu="toggleMenu"/>
    <div class="flex h-screen">
      <AppMenuBar class="relative h-full" :isOpen="isMenuOpen"/>
      <!-- <AppArea class="" /> -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AppHeader from './components/AppHeader.vue';
import AppMenuBar from './components/AppMenuBar.vue';
// import AppArea from './components/AppArea.vue';

//Menu打開關起來
const isMenuOpen = ref(false)
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  font-family: 'Helvetica', 'Arial', sans-serif;
}

#app {
  width: 100%;
  height: 100%;
}
</style>