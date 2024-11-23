
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import ItemsView from "@/views/ItemsView.vue";
import NotFoundView from "@/views/NotFoundView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/',  name: 'home',  component: HomeView },
        { path: '/items',  name: 'items',  component: ItemsView },
        { path: '/:catchAll(.*)', name: 'not-found', component: NotFoundView }, // redirect: { name: 'home' }
    ],
});

export default router;