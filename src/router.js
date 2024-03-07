import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import AppCars from './pages/AppCars.vue';
import AppBrandCars from './pages/AppBrandCars.vue';
import AppNotFound from './pages/AppNotFound.vue';
import AppAboutUs from './pages/AppAboutUs.vue';


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
            path: '/cars/brand/:slug',
            name: 'brand-cars',
            component: AppBrandCars
        },
        {
            path: '/about-us',
            name: 'about-us',
            component: AppAboutUs
        },
        {
            path: '/:patchMatch(.*)*',
            name: 'not-found',
            component: AppNotFound,
        },
    ]
})

export default router