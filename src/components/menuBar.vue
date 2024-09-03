<template>
    <aside @mouseleave="handleMouseLeave"
        :class="['bg-white shadow-md relative', 'transition-all duration-300 ease-in-out', (pointerOpen || isOpen) ? 'w-80' : 'w-16']">
        <nav>
            <div v-for="(config, index) in data" :key="config.code" @click="openTab()">
                <div @click="toggleSubmenu(index)" @mouseenter="handleMouseEnter" 
                    :class="['px-4 flex items-center py-2 text-gray-600 hover:bg-gray-200 h-12 relative cursor-pointer',
                    { 'bg-gray-200': isActiveRoute(config) }]">
                    <div v-if="level === 1"
                        class="w-14 flex items-center justify-center absolute left-0 top-0 bottom-0">
                        <component :is="getIcon(config.icon)" class="w-5 h-5 transition-all duration-300 ease-in-out"
                            aria-hidden="true" />
                    </div>
                    <span :class="['transition-all duration-300 ease-in-out overflow-hidden whitespace-nowrap',
                        level === 1 ? ((pointerOpen || isOpen) ? 'block' : 'hidden') : 'block',
                        level === 1 ? 'ml-10' : 'ml-12']"
                        @click="navigateByRouteName(config.code, index, config.name, config.kind)">
                        {{ config.name }}
                    </span>
                    <component v-if="config.children && config.children.length" :is="getIcon('ChevronDownIcon')" :class="['ml-auto w-5 h-5 transition-transform duration-300',
                        openSubmenuIndex === index ? 'transform rotate-180' : '',
                        level === 1 ? ((pointerOpen || isOpen) ? 'block' : 'hidden') : 'block']" />
                </div>
                <div v-if="config.children && config.children.length" :class="['overflow-hidden transition-all duration-300 ease-in-out',
                    openSubmenuIndex === index ? 'max-h-screen' : 'max-h-0']">
                    <MenuBar :data="config.children" :level="level + 1" :is-open="true"/>
                </div>
            </div>
        </nav>
    </aside>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import {
    DocumentIcon,
    ChevronDownIcon,
    IdentificationIcon,
    UsersIcon, 
    ArrowTrendingUpIcon, 
    CurrencyDollarIcon, 
    NewspaperIcon, 
    Square3Stack3DIcon, 
    Squares2X2Icon, 
    ClipboardIcon, 
    ChevronUpIcon
} from '@heroicons/vue/24/outline'
import type { Response } from '../api/common/model';
import { useMenuStore } from '../store/menu';

export interface MenuItem extends Response {
    uuid: string;
    code: string;
    kind: string;
    name: string;
    url?: string;
    children?: MenuItem[];
    icon: string;
}

const props = defineProps<{
    data: MenuItem[];
    level: number;
    isOpen: boolean;
}>()

const menuStore = useMenuStore();

const emits = defineEmits(['openTab']);
const openTab = () => {
  emits('openTab');
};

const navigateByRouteName = (routeId: string, index: number, routeName: string, kind: string) => {
  menuStore.storeData.routeId = '';
  menuStore.storeData.routeName = '';

  console.log('routeId:'+routeId,'index:'+index, 'routeName:'+routeName, 'kind:'+kind)
  // 還有子層代表屬於目錄，非功能
//   if (isDirectoryRecordList[index]) return;
  // router找不到路徑也return
//   if (!router.hasRoute(routeId)) return;
  // 若kind不為B也return
  if (kind !== 'B') return;

  // 將routeId 跟 routeName存入pinia
  menuStore.storeData.routeId = routeId;
  menuStore.storeData.routeName = routeName;
};

const route = useRoute()
const pointerOpen = ref(false)
const openSubmenuIndex = ref<number | null>(null)

const shouldApplyHoverStyles = computed(() => props.level === 1)

const iconComponents = {
    DocumentIcon,
    ChevronDownIcon,
    IdentificationIcon,
    UsersIcon, 
    ArrowTrendingUpIcon, 
    CurrencyDollarIcon, 
    NewspaperIcon, 
    Square3Stack3DIcon, 
    Squares2X2Icon, 
    ClipboardIcon, 
    ChevronUpIcon
}

const getIcon = (iconName: string) => {
    return iconComponents[iconName as keyof typeof iconComponents] || DocumentIcon
}

const toggleSubmenu = (index: number) => {
    openSubmenuIndex.value = openSubmenuIndex.value === index ? null : index
}

const handleMouseEnter = () => {
    if (shouldApplyHoverStyles.value) {
        pointerOpen.value = true
    }
}

//滑鼠指標離開
const handleMouseLeave = () => {
    if (shouldApplyHoverStyles.value) {
        pointerOpen.value = false
        if (!props.isOpen) {
            closeSubmenu();
        }
    }
}

//關閉子層
const closeSubmenu = () => {
    openSubmenuIndex.value = null;
};


// 監聽isOpen的變化
watch(() => props.isOpen, (value) => {
    if (value === false) {
        closeSubmenu();
    }
});

const isActiveRoute = (item: MenuItem): boolean => {
    if (!item.url) return false
    return route.path.startsWith(item.url)
}
</script>