<template>
    <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
  <!-- <div class="flex flex-col h-screen bg-gray-100">
    <AppHeader class="flex-shrink-0" :isMenuOpen="isMenuOpen" @toggleMenu="toggleMenu"/>
    <div class="flex h-screen">
      <AppMenuBar class="relative h-full" :isOpen="isMenuOpen" @openTab="createTab"/> -->
      <!-- <AppArea class="" /> -->
      <!-- <router-view></router-view> -->
    <!-- </div>
  </div> -->
</template>

<script setup lang="ts">
// import { ref } from 'vue'
// import AppHeader from './views/AppHeader.vue';
// import AppMenuBar from './views/AppMenuBar.vue';
// import router from './router';

// //Menu打開關起來
// const isMenuOpen = ref(false)
// const toggleMenu = () => {
//   isMenuOpen.value = !isMenuOpen.value
// }

// const createTab = (event: any) => {
//   console.log('event.routeId:'+event.routeId)
//   router.push({ name: event.routeId });
// };

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