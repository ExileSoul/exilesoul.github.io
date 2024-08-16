<template>
    <v-app>
        <v-main>
            <Navbar />
            <router-view />
        </v-main>
    </v-app>
</template>

<script lang="ts" setup>
import Navbar from './components/Navbar.vue';
</script>

<style></style>
