<!-- <template>
    <aside class="w-64 bg-white shadow-md">
      <div class="p-4 flex items-center space-x-2">
        <img src="https://picsum.photos/200/300" alt="Creative Tim Logo" class="w-10 h-10 rounded-full">
        <div>
          <h2 class="font-semibold text-gray-800">CREATIVE TIM</h2>
          <p class="text-xs text-gray-600">升級至專業版</p>
        </div>
      </div>
      <nav class="mt-6">
        <a href="#" class="flex items-center px-4 py-2 text-gray-700 bg-gray-200">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
          儀表板
        </a>
        <a href="#" class="flex items-center px-4 py-2 mt-2 text-gray-600 hover:bg-gray-200">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
          </svg>
          Laravel 範例
        </a>
        <a href="#" class="flex items-center px-4 py-2 mt-2 text-gray-600 hover:bg-gray-200">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
          </svg>
          用戶檔案
        </a>
        <a href="#" class="flex items-center px-4 py-2 mt-2 text-gray-600 hover:bg-gray-200">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
          </svg>
          用戶管理
        </a>
        <a href="#" class="flex items-center px-4 py-2 mt-2 text-gray-600 hover:bg-gray-200">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
          </svg>
          圖標
        </a>
        <a href="#" class="flex items-center px-4 py-2 mt-2 text-gray-600 hover:bg-gray-200">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
          </svg>
          地圖
        </a>
        <a href="#" class="flex items-center px-4 py-2 mt-2 text-gray-600 hover:bg-gray-200">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
          </svg>
          通知
        </a>
      </nav>
    </aside>
  </template> -->

<template>
  <aside
    @mouseleave="pointerOpen = false"
    :class="['bg-white shadow-md relative', 'transition-all duration-300 ease-in-out', (pointerOpen || isOpen) ? 'w-56' : 'w-16']">
    <nav>
      <router-link v-for="route in routes" :key="route.path" :to="route.path" :class="['px-4 flex items-center py-2 text-gray-600 hover:bg-gray-200 h-12 relative',
        { 'bg-gray-200': $route.path === route.path }]">
        <div @mouseenter="pointerOpen = true"
          class="w-16 flex items-center justify-center absolute left-0 top-0 bottom-0">
          <component :is="getIcon(route.meta?.icon as string)"
            :class="['w-5 h-5, mr-2', 'transition-all duration-300 ease-in-out']" aria-hidden="true" />
        </div>
          <span
            :class="['ml-10 transition-all duration-300 ease-in-out overflow-hidden whitespace-nowrap', (pointerOpen || isOpen) ? 'block' : 'hidden']">
            {{ route.meta?.text }}
          </span>
      </router-link>
    </nav>
  </aside>
</template>


<script setup lang="ts">
import { ref } from 'vue'
import { routes } from '../router'
import { IdentificationIcon, UsersIcon, ArrowTrendingUpIcon, CurrencyDollarIcon, NewspaperIcon, Square3Stack3DIcon, Squares2X2Icon, ClipboardIcon } from '@heroicons/vue/24/solid'

defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})

const pointerOpen = ref(false)

const iconComponents = {
  IdentificationIcon,
  UsersIcon,
  ArrowTrendingUpIcon,
  CurrencyDollarIcon,
  NewspaperIcon,
  Square3Stack3DIcon,
  Squares2X2Icon,
  ClipboardIcon
}

const getIcon = (name: string) => {
  return iconComponents[name as keyof typeof iconComponents] || IdentificationIcon;
}

</script>