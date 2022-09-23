<template>
    <div class="w-full bg-gray-200 dark:bg-slate-700">
        <div>
            <span class="material-icons cursor-pointer" @click="changeTheme">
                {{ `${theme}_mode` }}
            </span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useBaseStore } from '../store';

const theme = ref(localStorage.theme);

/** 
 * Function to add change theme in localStore 
 */
function changeTheme() {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
    useBaseStore().setDarkMode(theme.value)
}
</script>