import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router"
const routes: RouteRecordRaw[] = [
    {
        path: '/',
        alias: '/songs',
        name: 'songs',
        component: () => import('@/components/SongList.vue')
    },
    {
        path: '/songs/new',
        name: 'songs-new',
        component: () => import('@/components/SongForm.vue')
    },
    {
        path: '/songs/:id',
        name: 'songs-details',
        component: () => import('@/components/SongDetails.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router