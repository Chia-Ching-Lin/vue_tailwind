import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// import Dashboard from '../views/Dashboard.vue'
import shareholderInfo from '../views/shareholderInfo.vue'
import shareholderMOperation from '../views/shareholderMOperation.vue'
import AppArea from '../components/AppArea.vue'
// import UserManagement from '../views/UserManagement.vue'
// import Icons from '../views/Icons.vue'
// import Maps from '../views/Maps.vue'
// import Notifications from '../views/Notifications.vue'

export const routes: RouteRecordRaw[] = [
  {
    path: '/shareholderInfo',
    name: 'shareholderInfo',
    component: shareholderInfo,
    meta: { icon: 'IdentificationIcon', text: '股東資料' }
  },
  {
    path: '/stockInfo',
    name: 'stockInfo',
    component: AppArea,
    meta: { icon: 'ArrowTrendingUpIcon', text: '股票資料' }
  },
  {
    path: '/stockRInfo',
    name: 'stockRInfo',
    component: AppArea,
    meta: { icon: 'ClipboardIcon', text: '股權資料' }
  },
  {
    path: '/director',
    name: 'director',
    component: AppArea,
    meta: { icon: 'UsersIcon', text: '董事會作業' }
  },
  {
    path: '/shareholderMOperation',
    name: 'shareholderMOperation',
    component: shareholderMOperation,
    meta: { icon: 'UsersIcon', text: '股東會作業' }
  },
  {
    path: '/exDividend',
    name: 'exDividend',
    component: AppArea,
    meta: { icon: 'CurrencyDollarIcon', text: '除息作業' }
  },
  {
    path: '/exRights',
    name: 'exRights',
    component: AppArea,
    meta: { icon: 'Square3Stack3DIcon', text: '除權作業' }
  },
  {
    path: '/declare',
    name: 'declare',
    component: AppArea,
    meta: { icon: 'NewspaperIcon', text: '申報作業' }
  },
  {
    path: '/other',
    name: 'other',
    component: AppArea,
    meta: { icon: 'Squares2X2Icon', text: '其他功能' }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;