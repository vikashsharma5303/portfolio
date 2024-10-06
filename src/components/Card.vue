<template>
    <!-- class="card relative shadow-lg hover:shadow-sm w-80 h-44 bg-gray-200 dark:bg-[#25394d] p-6 rounded-md cursor-pointer"> -->
    <div
        class="card relative shadow-lg hover:shadow-sm w-80 h-44 bg-gray-200 dark:bg-[#2c2e35] p-6 rounded-lg cursor-pointer">
        <div class="text-left">
            <h1 class="text-2xl">{{title}}</h1>
            <p class="desc mt-2 h-28 w-72 dark:text-gray-400">{{description}}</p>
        </div>
        <div @click="$emit('getInfo')"
            class="slide shadow-md rounded-md bg-rose-300 dark:bg-[#27282e]  w-0 h-44 absolute top-0 left-0 ease-in-out transition-all delay-150 flex justify-center items-center overflow-hidden">
            <p class="">View more</p>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    title: {
        type: String,
        default: 'title',
    },
    description: {
        type: String,
        default: 'description',
    }
})

defineEmits(['getInfo'])
</script>


<style scope>
.card:hover .slide {
    display: flex;
    width: 100%;
}
</style>