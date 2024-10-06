<template>
    <PageView>
        <div class="flex flex-col">
            <h1 class="title text-5xl"> My SKILLS</h1>
            <!-- <button class="text-white bg-blue-400 mt-4 h-10 flex justify-center items-center">
                <a class='flex gap-x-2 justify-center items-center  h-full w-full' href="../assets/github.png"
                    download="om.png">Download CV
                    <MdIcon text="download" />
                </a>
            </button> -->
        </div>
        <div class="flex flex-col text-left">
            <div v-for="skill in skills" class="mt-5">
                <p class="text-xl border-b-2 font-sans font-bold">{{ skill.title }}</p>
                <p class="pt-2 ml-2 dark:text-gray-300">{{ skill.course }}</p>
            </div>
        </div>
    </PageView>
</template>

<script setup lang="ts">
import skills from '../assets/skills.json'
import MdIcon from '../components/MdIcon.vue';

</script>


<style>
.title {
    font-variant: small-caps;
}
</style>