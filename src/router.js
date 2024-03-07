import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import AppCars from './pages/AppCars.vue';
import AppBrandCars from './pages/AppBrandCars.vue';
import AppNotFound from './pages/AppNotFound.vue';
import Details_car from './pages/Details_car.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/cars',
            name: 'cars',
            component: AppCars
        },
        {
            path: '/car/:slug',
            name: 'details-car',
            component: Details_car
        },
        {
            path: '/cars/brand/:slug',
            name: 'brand-cars',
            component: AppBrandCars
        },
        {
            path: '/:patchMatch(.*)*',
            name: 'not-found',
            component: AppNotFound,
        },
    ]
})

export default router