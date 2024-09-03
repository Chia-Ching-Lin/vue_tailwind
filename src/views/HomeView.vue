<template>
<div class="flex flex-col h-screen bg-gray-100">
    <AppHeader class="flex-shrink-0" :isMenuOpen="isMenuOpen" @toggleMenu="toggleMenu"/>
    <div class="flex h-screen">
      <AppMenuBar class="relative h-full" :isOpen="isMenuOpen" @openTab="createTab"/>
      <!-- <AppArea class="" /> -->
      <router-view v-slot="{ Component }">
        <keep-alive :max="10">
            <component :is="Component" />
          </keep-alive>
      </router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AppHeader from './AppHeader.vue';
import AppMenuBar from './AppMenuBar.vue';
import router from '../router';

//Menu打開關起來
const isMenuOpen = ref(false)
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const createTab = (event: any) => {
  console.log('event.routeId:'+event.routeId)
  router.push({ name: event.routeId });
};

</script>