import { createRouter, createWebHistory } from "vue-router";
import dashboard from "../views/dashboard.vue";
import login from "../views/login.vue";
import requestPassword from "../views/request-password.vue";
import resetPassword from "../views/reset-password.vue";

const routes = [
    { path: '/dashboard', name: 'dashboard', component: dashboard },
    { path: '/login', name: 'login', component: login },
    { path: '/request-password', name: 'requestPassword', component: requestPassword} ,
    { path: '/reset-password', name: 'resetPassword', component: resetPassword }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;