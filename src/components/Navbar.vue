<template>
    <div class="relative w-full h-full shadow-sm border-b-[0.5px] dark:border-[#2F2F2F] border-gray-200 flex items-center p-2 sm:p-1">
        <div v-if="route.name !== 'home'" class="flex absolute sm:left-5 left-5 sm:hidden">
            <MdIcon text="arrow_back_ios" @click="router.back()" />
        </div>
        <!-- TODO: For left top corner home link -->
        <!-- <div class="hidden absolute sm:left-5 left-5 sm:block">
            <RouterLink :to="{name: 'home'}"> OM </RouterLink>
        </div> -->
        <div class="hidden w-full sm:flex justify-end pr-12">
            <RouterLink v-for="link in navigationLinks" :to="{name:link.name}" @click="handler(link.name)"
            :class="['focus:outline-0 w-32 p-1 hover:animate-none dark:hover:text-gray-200 dark:transition-all dark:delay-75 uppercase', activeLink === link.name ? 'dark:text-white text-rose-500' : 'dark:text-gray-500 animate-bounce1' ]">
            {{link.label}}
            </RouterLink>
        </div>
        <div class="absolute sm:right-5 right-16 flex">
            <MdIcon :text="`${baseStore.isDarkMode ? 'dark' : 'light'}_mode`" @click="toggleDark()" class="dark:text-[#61636d]" />
        </div>
        <div class="absolute sm:right-5 right-5 flex  sm:hidden">
            <MdIcon text="menu" @click="baseStore.setCloseDialog(false)" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { useBaseStore } from '../store';
import toggleDark from '../helpers/darkMode';
import { useRoute, useRouter } from 'vue-router';
import { ref, watch } from 'vue';

const baseStore = useBaseStore();

const route = useRoute()
const router = useRouter();

// Track dark mode or light mode.
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    const isDarkMode = event.matches
    useBaseStore().setDarkMode(isDarkMode ? 'dark' : 'auto')
    document.documentElement.classList[isDarkMode ? 'add' : 'remove']('dark')
});

// Get theme value from localStorage
useBaseStore().setDarkMode(localStorage['vueuse-color-scheme'] === 'dark' ? 'dark' : 'auto')

// Top Navigation links
const navigationLinks = [{
    name: 'home',
    color: 'bg-amber-500',
    label: 'Home'
}, {
    name: 'about',
    color: 'bg-green-500',
    label: 'About'
}, {
    name: 'project',
    color: 'bg-amber-500',
    label: 'Projects'
}, {
    name: 'skills',
    color: 'bg-slate-300',
    label: 'Skills'
}]

const activeLink = ref('home')
function handler(value: string) {
    activeLink.value = value
}

watch(route, () => {
    activeLink.value = route.name as string
})
</script>