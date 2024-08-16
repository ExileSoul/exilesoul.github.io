/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins';

// Components
import { createI18n } from 'vue-i18n';
import App from './App.vue';

import en from '@/locales/en.json';
import fr from '@/locales/fr.json';

const i18n = createI18n({
    locale: 'en', // default locale
    fallbackLocale: 'en', // fallback locale if the current locale is missing
    messages: {
        en,
        fr,
    },
});

// Composables
import { createApp } from 'vue';

const app = createApp(App);

registerPlugins(app);

app.use(i18n);

app.mount('#app');
