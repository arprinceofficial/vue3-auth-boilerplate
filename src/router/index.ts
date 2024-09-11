import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'main',
        meta: {
            requiresAuth: false
        },
        component: () => import('../views/MainView.vue')
    },
    {
        path: '/login',
        name: 'login',
        meta: {
            requiresAuth: false
        },
        component: () => import('../views/LoginView.vue')
    },
    {
        path: '/home',
        name: 'home',
        meta: {
            requiresAuth: true
        },
        component: () => import('../views/HomeView.vue')
    },
    {
        path: '/about',
        name: 'about',
        meta: {
            requiresAuth: true
        },
        component: () => import('../views/AboutView.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior: async (to: any, from: any, savedPosition: any) => {
        // console.log('to ddf', to);
        if (savedPosition) {
            return savedPosition;
        }
        if (to.hash) {
            return { selector: to.hash };
        }
        return { x: 0, y: 0 };
    }
});

router.beforeEach((to, from, next) => {
    const loggedUser = JSON.parse(localStorage.getItem('user-info') || '{}')?.data?.access_token;
    const authRequired = to.matched.some((route) => route.meta.requiresAuth);
    // if (loggedUser && to.path === '/login' || to.path === '/') {
    if (loggedUser && to.path === '/login') {
        return next('/home');
    }

    if (authRequired && !loggedUser) {
        return next('/login');
    }

    next();
});


export default router
