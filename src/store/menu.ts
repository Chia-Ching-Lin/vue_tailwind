import { defineStore } from 'pinia';
import { ref } from 'vue';
import { MenuItem } from '../components/menuBar.vue';


interface MenuState {
  routeName: string;
  routeId: string;
}

export const useMenuStore = defineStore('menuInfo', () => {
  const storeData = ref<MenuState>({ routeId: '', routeName: '' });
  const menu = ref<MenuItem[]>([]);
  return { storeData, menu };
});