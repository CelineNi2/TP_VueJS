// router.js
import { createRouter, createWebHistory } from 'vue-router';
import WindowsComponent from './lists/WindowsList.vue';
import RoomsComponent from './lists/RoomsList.vue';

const routes = [
    { path: '/windows', component: WindowsComponent },
    { path: '/rooms', component: RoomsComponent }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
