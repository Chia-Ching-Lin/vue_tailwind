<!-- <template>
  <aside @mouseleave="handleMouseLeave"
    :class="['bg-white shadow-md relative', 'transition-all duration-300 ease-in-out', (pointerOpen || isOpen) ? 'w-64' : 'w-16']">
    <nav>
      <div v-for="(route, index) in routes" :key="route.url">
        <div @click="toggleSubmenu(index)" @mouseenter="pointerOpen = true" :class="['px-4 flex items-center py-2 text-gray-600 hover:bg-gray-200 h-12 relative cursor-pointer',
          { 'bg-gray-200': isActiveRoute(route) }]">
          <div class="w-16 flex items-center justify-center absolute left-0 top-0 bottom-0">
            <component :is="getIcon(route?.icon as string)" class="w-5 h-5 transition-all duration-300 ease-in-out"
              aria-hidden="true" />
          </div>
          <span
            :class="['ml-10 transition-all duration-300 ease-in-out overflow-hidden whitespace-nowrap', (pointerOpen || isOpen) ? 'block' : 'hidden']">
            {{ route?.name }}
          </span>
          <component 
            v-if="route.children && route.children.length"
            :is="getIcon('ChevronDownIcon')"
            :class="['ml-auto w-5 h-5 transition-transform duration-300', openSubmenuIndex === index ? 'transform rotate-180' : '', (pointerOpen || isOpen) ? 'block' : 'hidden']"
          />
        </div>
        <div v-if="route.children && route.children.length" :class="['bg-gray-100 overflow-hidden transition-all duration-300 ease-in-out',
          openSubmenuIndex === index ? 'max-h-screen' : 'max-h-0']">
          <router-link v-for="child in route.children" :key="child.url" :to="child.url" :class="['pl-16 pr-4 py-2 flex items-center text-sm text-gray-600 hover:bg-gray-200',
            { 'bg-gray-200': $route.url === child.url }]">
            {{ child?.name }}
          </router-link>
        </div>
      </div>
    </nav>
  </aside>
</template> -->

<template>
  <MenuBar :data="menuData" :level="1" :is-open="isOpen" @openTab="outputEvent"/>
</template>

<script setup lang="ts">
import { onBeforeMount, ref, toRaw } from 'vue'
import menuJson from '../api/menu.json';
import MenuBar, {
  type MenuItem
} from '../components/menuBar.vue'
import { useMenuStore } from '../store/menu';

const isOpen = ref(false)
const menuData = ref<MenuItem[]>([]);
const menuStore = useMenuStore();

const emits = defineEmits(['openTab']);

onBeforeMount(async () => {
  // const response = await commonAPI.getMenu()
  // menu.value = response!;
  menuData.value = menuJson as MenuItem[];
});

const outputEvent = () => {
  if (menuStore.storeData.routeId && menuStore.storeData.routeName) {
    emits('openTab', toRaw(menuStore.storeData));
  }
};

</script>


<!-- <script setup lang="ts">
import { onBeforeMount, ref, watch } from 'vue'
import { MenuItem, RouteItem, routes } from '../router'
import { IdentificationIcon, UsersIcon, ArrowTrendingUpIcon, CurrencyDollarIcon, NewspaperIcon, Square3Stack3DIcon, Squares2X2Icon, ClipboardIcon, ChevronUpIcon, ChevronDownIcon } from '@heroicons/vue/24/solid'
import menuJson from '../api/menu.json';

const iconComponents = {
  IdentificationIcon,
  UsersIcon,
  ArrowTrendingUpIcon,
  CurrencyDollarIcon,
  NewspaperIcon,
  Square3Stack3DIcon,
  Squares2X2Icon,
  ClipboardIcon,
  ChevronUpIcon,
  ChevronDownIcon
}

//取得Icon
const getIcon = (name: string) => {
  return iconComponents[name as keyof typeof iconComponents] || IdentificationIcon;
}

//點擊左上角漢堡Icon後接值
const props = defineProps<{
  isOpen: boolean;
}>();

//子層
const openSubmenuIndex = ref<number | null>(null);
const toggleSubmenu = (index: number) => {
  if (openSubmenuIndex.value === index) {
    //關閉子層
    closeSubmenu();
  } else {
    openSubmenuIndex.value = index;
  }
};

//滑鼠移至Icon上方
const pointerOpen = ref(false);

//關閉子層
const closeSubmenu = () => {
  openSubmenuIndex.value = null;
};

//滑鼠指標離開
const handleMouseLeave = () => {
  pointerOpen.value = false;
  if (props.isOpen === false) {
    closeSubmenu();
  }
};

// 監聽isOpen的變化
watch(() => props.isOpen, (value) => {
  if (value === false) {
    closeSubmenu();
  }
});

//避免找不到url或因為非字串導致錯誤
const isActiveRoute = (item: RouteItem): boolean => {
  if (!item.url || typeof item.url !== 'string') return false
  return item.url.startsWith(item.url)
}


</script> -->