import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import MenuPage from '../views/MenuPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/pages/location'
  },
  {
    path: '/pages/',
    component: MenuPage,
    children: [
      {
        path: '',
        redirect: '/pages/location'
      },
      {
        path: 'location',
        component: () => import('@/views/LocationPage.vue')
      },
      {
        path: 'new_place',
        component: () => import('@/views/NewPlacePage.vue')
      },
      {
        path: 'my_places',
        component: () => import('@/views/MyPlacesPage.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
