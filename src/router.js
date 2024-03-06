import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import AppCars from './pages/AppCars.vue';
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
    ]
})

export default router