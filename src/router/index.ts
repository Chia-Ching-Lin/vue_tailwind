import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import menuJson from '../api/menu.json';
import { onBeforeMount, ref } from 'vue';
import { MenuItem } from '../components/menuBar.vue';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes:[
    // {
    //   path: '/',
    //   redirect: '/auth/login'
    // },
    // {
    //   path: '/auth/login',
    //   name: 'auth-login',
    //   component: AppArea
    // },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: HomeView,
      children: [
        {
          path: 'txn/G1-3A',
          name: 'G1-3A',
          component: () => import('../views/shareholderInfo.vue')
        },
        {
          path: 'txn/G1-05',
          name: 'G1-05',
          component: () => import('../views/shareholderMOperation.vue')
        },
        // {
        //   path: 'txn/G2-03',
        //   name: 'G2-03',
        //   component: () => import('../views/G/G2/G2-03/G2-03-s01.vue')
        // },
        // {
        //   path: 'txn/G2-24',
        //   name: 'G2-24',
        //   component: () => import('../views/G/G2/G2-24/G2-24.vue')
        // },
        // {
        //   path: 'txn/G2-26',
        //   name: 'G2-26',
        //   component: () => import('../views/G/G2/G2-26/G2-26-s01.vue')
        // },
        // {
        //   path: 'txn/G3-09',
        //   name: 'G3-09',
        //   component: () => import('../views/G/G3/G3-09/G3-09.vue')
        // },
        // {
        //   path: 'txn/G4-21',
        //   name: 'G4-21',
        //   component: () => import('../views/G/G4/G4-21/G4-21.vue')
        // },
        // {
        //   path: 'txn/G4-24',
        //   name: 'G4-24',
        //   component: () => import('../views/G/G4/G4-24/G4-24.vue')
        // },
        // {
        //   path: 'txn/G10-12',
        //   name: 'G10-12',
        //   component: () => import('../views/G/G10/G10-12/G10-12-s01.vue')
        // }
        { path: '/:notFound(.*)', redirect: '/dashboard' }
      ]
    },
  ]
});

const menu = ref<MenuItem[]>([]);

onBeforeMount(async () => {
  // const response = await commonAPI.getMenu()
  // menu.value = response!;
  menu.value = menuJson as MenuItem[];
});


//動態調整路由的函數
// async function adjustRoutes() {
//   try {
//     const menuData = await getMenuData();
//     const dashboardRoute = router.getRoutes().find(route => route.name === 'dashboard');
//     if (dashboardRoute && dashboardRoute.children) {
//       // 過濾路由，只保留在 API 菜單中存在的路由
//       dashboardRoute.children = dashboardRoute.children.filter(route => 
//         menuData.some(menuItem => menuItem.code === route.name)
//       ).map(route => {
//         const menuItem = menuData.find(item => item.code === route.name);
//         return {
//           ...route,
//           meta: {
//             ...route.meta,
//             menuItem: {
//               name: menuItem.name,
//               kind: menuItem.kind,
//               // 其他您可能需要的菜單項資訊
//             }
//           }
//         };
//       });

//       // 重新設置路由
//       router.addRoute(dashboardRoute);
//     }
//   } catch (error) {
//     console.error('調整路由時出錯:', error);
//   }
// }

// function flattenMenuItems(items: MenuItem[]): MenuItem[] {
//   return items.reduce<MenuItem[]>((acc, item) => {
//     if (item.children) {
//       return [...acc, ...flattenMenuItems(item.children)];
//     }
//     return [...acc, item];
//   }, []);
// }

// 修改後的 adjustRoutes 函數
// function adjustRoutes(): void {
//   const menuData = flattenMenuItems(menuJson);
//   const dashboardRoute = router.getRoutes().find(route => route.name === 'dashboard');
//   if (dashboardRoute && dashboardRoute.children) {
//     // 過濾路由，只保留在菜單中存在的路由
//     dashboardRoute.children = dashboardRoute.children.filter(route => 
//       menuData.some(menuItem => menuItem.code === route.name)
//     ).map(route => {
//       const menuItem = menuData.find(item => item.code === route.name);
//       if (menuItem) {
//         return {
//           ...route,
//           meta: {
//             ...(route.meta as RouteMetaData),
//             menuItem: {
//               uuid: menuItem.uuid,
//               name: menuItem.name,
//               kind: menuItem.kind,
//               url: menuItem.url || '',
//               parentCode: (menuItem as any).parentCode // 如果需要父菜單信息
//             }
//           }
//         };
//       }
//       return route;
//     });

//     // 重新設置路由
//     router.addRoute(dashboardRoute);
//   }
// }



// 在應用啟動時調用此函數
// adjustRoutes();


export default router;