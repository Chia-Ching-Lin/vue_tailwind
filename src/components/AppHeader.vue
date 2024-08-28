<template>
  <header class="bg-white shadow-sm">
    <div class="max-w-8xl mx-auto px-4">
      <div class="flex justify-between items-center h-16">
        <div class="flex items-center">
          <button @click="$emit('toggleMenu')">
            <Bars3Icon class="h-6 w-6 mr-4" aria-hidden="true" />
          </button>
          <h1 class="text-lg font-semibold">雲端股務管理系統</h1>
        </div>
        <div class="flex items-center space-x-4">
          <a href="#" class="text-gray-600 hover:text-gray-900">儀表板</a>
          <a href="#" class="text-gray-600 hover:text-gray-900">文檔</a>
          <div class="relative">
            <input type="text" placeholder="搜索"
              class="pl-8 pr-2 py-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500">
              <MagnifyingGlassIcon class="h-4 w-4 absolute left-2 top-2" aria-hidden="true"/>
              <!-- <svg class="w-4 h-4 absolute left-2 top-2 text-gray-400" fill="none" stroke="currentColor"
              viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg> -->
          </div>
          <!-- <button class="text-gray-600 hover:text-gray-900">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z">
              </path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
          </button> -->


          <Menu as="div" class="relative ml-3">
            <div>
              <MenuButton @click="toggleIcon" class="pt-1.5">
                <span class="sr-only">Open notification message</span>
                <BellAlertIcon  v-if="!isAlertActive" class="h-6 w-6" aria-hidden="true" />
                <BellIcon v-else class="h-6 w-6" aria-hidden="true" />
              </MenuButton>
            </div>
            <transition enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95">
              <MenuItems
                class="absolute right-0 z-10 mt-2 w-96 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <MenuItem v-for="item in notification" :key="item.message" v-slot="{ active }">    
                <a :href="item.href"
                  :class="[active ? 'bg-gray-100' : '', 'flex items-center block px-6 py-3 text-sm text-gray-700']">
                  {{ item.message }}
                </a>
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>

          <Menu as="div" class="relative ml-3">
            <div>
              <MenuButton
                class="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <span class="absolute -inset-1.5"></span>
                <span class="sr-only">Open user menu</span>
                <img class="h-8 w-8 rounded-full" :src="user.imageUrl" alt="" />
              </MenuButton>
            </div>
            <transition enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95">
              <MenuItems
                class="absolute right-0 z-10 mt-2 w-96 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <MenuItem v-for="item in userNavigation" :key="item.name" v-slot="{ active }">
                <a :href="item.href"
                  :class="[active ? 'bg-gray-100' : '', 'flex items-center block px-6 py-3 text-sm text-gray-700']">
                  <component :is="getIcon(item.iconName)" class="h-6 w-6 mr-2" aria-hidden="true" />
                  {{ item.name }}
                </a>
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>

          <!-- <div class="fixed top-16 w-full max-w-sm px-4">
            <Popover v-slot="{ open }" class="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
              <PopoverButton>
                <img class="h-8 w-8 rounded-full" :src="user.imageUrl" alt="" />
              </PopoverButton>
              <transition enter-active-class="transition duration-200 ease-out"
                enter-from-class="translate-y-1 opacity-0" enter-to-class="translate-y-0 opacity-100"
                leave-active-class="transition duration-150 ease-in" leave-from-class="translate-y-0 opacity-100"
                leave-to-class="translate-y-1 opacity-0">
                <PopoverPanel
                  class="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-1xl">
                  <div class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
                    <div class="bg-gray-50 p-4">
                      <a href="##"
                        class="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50">
                        <span class="flex items-center">
                          <span class="text-sm font-medium text-gray-900">
                            Documentation
                          </span>
                        </span>
                        <span class="block text-sm text-gray-500">
                          Start integrating products and tools
                        </span>
                      </a>
                    </div>
                  </div>
                </PopoverPanel>
              </transition>
            </Popover>
          </div> -->
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
// import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { BellIcon, ArrowRightStartOnRectangleIcon, Cog8ToothIcon, UserIcon, Bars3Icon, MagnifyingGlassIcon, BellAlertIcon } from '@heroicons/vue/24/outline'

defineProps(['isMenuOpen']);
defineEmits(['toggleMenu']);

const isAlertActive = ref(false);
const toggleIcon = () => {
  isAlertActive.value = !isAlertActive.value;
}

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl: 'https://picsum.photos/200/300',
}

const iconComponents = {
  BellIcon,
  ArrowRightStartOnRectangleIcon,
  Cog8ToothIcon,
  UserIcon
}

const userNavigation = [
  { name: 'Your Profile', href: '#', iconName: 'UserIcon' },
  { name: 'Account Settings', href: '#', iconName: 'Cog8ToothIcon' },
  { name: 'Logout', href: '#', iconName: 'ArrowRightStartOnRectangleIcon' },
]

const notification = [
  { id: '1', href: '#', message: '股東會議通知：年度股東大會將於2024年6月15日上午10時在台北國際會議中心舉行，請準時參加。' },
  { id: '2', href: '#', message: '財務報告相關：2024年第二季財務報告已發布，請登入系統查看詳細內容。' },
  { id: '3t', href: '#', message: '股利分配：董事會通過2023年度現金股利分配，每股配發2.5元，預計於2024年9月15日發放。' },
]


const getIcon = (name: string) => {
  return iconComponents[name as keyof typeof iconComponents] || BellIcon;
}


</script>