/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import Contact from '@/pages/Contact.vue';
import Home from '@/pages/Home.vue';
import Projects from '@/pages/Projects.vue';
import Skills from '@/pages/Skills.vue';
import { createRouter, createWebHistory } from 'vue-router/auto';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/Contact',
        name: 'Contact',
        component: Contact,
    },
    {
        path: '/Projects',
        name: 'Projects',
        component: Projects,
    },
    {
        path: '/Skills',
        name: 'Skills',
        component: Skills,
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
    if (
        err?.message?.includes?.('Failed to fetch dynamically imported module')
    ) {
        if (!localStorage.getItem('vuetify:dynamic-reload')) {
            console.log('Reloading page to fix dynamic import error');
            localStorage.setItem('vuetify:dynamic-reload', 'true');
            location.assign(to.fullPath);
        } else {
            console.error(
                'Dynamic import error, reloading page did not fix it',
                err
            );
        }
    } else {
        console.error(err);
    }
});

router.isReady().then(() => {
    localStorage.removeItem('vuetify:dynamic-reload');
});

export default router;
