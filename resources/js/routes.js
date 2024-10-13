import { createRouter, createWebHistory } from "vue-router";
import TheHome from "@/pages/TheHome.vue";
import SomePage from "@/pages/SomePage.vue";
import AboutUs from "@/pages/AboutUs.vue";

const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: 'active',
    routes: [
        { name: 'home', path: '/', component: TheHome},
        { name: 'some-page', path: '/some-page', component: SomePage },
        { name: 'about', path: '/about', component: AboutUs }
    ]
});

export default router;
