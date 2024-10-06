<template>
    <span class="material-icons cursor-pointer text-black dark:text-white select-none">
        {{text}}
    </span>
</template>

<script setup lang="ts">
defineProps({
    text: {
        type: String,
        default: ""
    }
})
</script>