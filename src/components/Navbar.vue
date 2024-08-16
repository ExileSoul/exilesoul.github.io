<template>
    <v-app-bar app color="transparent" flat elevate-on-scroll>
        <v-spacer></v-spacer>
        <v-btn
            text
            :class="{ selected: isActive('/'), 'nav-link': true }"
            @click="navigateTo('/')"
            >{{ $t('home') }}</v-btn
        >
        <v-btn
            text
            :class="{ selected: isActive('/Projects'), 'nav-link': true }"
            @click="navigateTo('/Projects')"
            >{{ $t('projects') }}</v-btn
        >
        <v-btn
            text
            :class="{ selected: isActive('/Skills'), 'nav-link': true }"
            @click="navigateTo('/Skills')"
            >{{ $t('skills') }}</v-btn
        >
        <v-btn
            text
            :class="{ selected: isActive('/Contact'), 'nav-link': true }"
            @click="navigateTo('/Contact')"
            >{{ $t('contact') }}</v-btn
        >
        <v-btn class="nav-link" @click="toggleLanguage">{{
            currentLanguage
        }}</v-btn>
    </v-app-bar>
</template>

<script>
import { useRoute, useRouter } from 'vue-router';

export default {
    name: 'Navbar',
    data() {
        return {
            currentLanguage: 'Français',
        };
    },
    setup() {
        const router = useRouter();
        const route = useRoute();

        const navigateTo = (path) => {
            router.push(path);
        };

        const isActive = (path) => {
            return route.path === path;
        };
        return {
            navigateTo,
            isActive,
        };
    },
    methods: {
        toggleLanguage() {
            const newLang = this.$i18n.locale === 'en' ? 'fr' : 'en';
            this.$i18n.locale = newLang;
            this.currentLanguage = newLang === 'en' ? 'Français' : 'English';
        },
    },
};
</script>

<style scoped>
.title {
    text-decoration: none;
    color: white;
    font-weight: bold;
    font-size: 1.5rem;
}

.nav-link {
    color: white;
    text-transform: none;
    text-decoration: none;
}

.selected {
    border-bottom: 2px solid white;
    color: white;
}

.v-btn {
    margin: 0 8px;
}
</style>
