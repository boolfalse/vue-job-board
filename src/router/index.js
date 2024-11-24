
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import ItemsView from "@/views/ItemsView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import ItemView from "@/views/ItemView.vue";
import AddItemView from "@/views/AddItemView.vue";
import EditItemView from "@/views/EditItemView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/',  name: 'home',  component: HomeView },
        { path: '/items',  name: 'items',  component: ItemsView },
        { path: '/items/:id',  name: 'item',  component: ItemView },
        { path: '/items/add',  name: 'add-item',  component: AddItemView },
        { path: '/items/edit/:id',  name: 'edit-item',  component: EditItemView },
        { path: '/:catchAll(.*)', name: 'not-found', component: NotFoundView }, // redirect: { name: 'home' }
    ],
});

export default router;