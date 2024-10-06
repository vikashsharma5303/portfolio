<template>
    <div class="w-full h-full flex flex-row justify-center items-center fixed z-50 dark:bg-[#2c2e35] bg-white">
        <div class="absolute right-5 top-5 ">
            <MdIcon text="close" class="text-3xl" @click="baseStore.setCloseDialog(true)" />
        </div>
        <div class="w-full h-full flex flex-col justify-center items-center">
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">
import { useBaseStore } from '../store';

const baseStore = useBaseStore()

</script>