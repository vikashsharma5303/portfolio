<template>
    <PageView>
        <div class="relative h-full overflow-auto w-full grid grid-cols-1 mx-auto place-items-center  ">
            <!-- class="my-10 shadow-sm w-full sticky -top-1 z-50 dark:bg-[#242424] bg-white text-[#213547] dark:text-white"> -->
            <div
                class="mt-10 mb-2 shadow-sm w-full sticky -top-1 z-50 dark:bg-transparent bg-white text-[#213547] dark:text-white">
                <h1 class="text-3xl p-2">My Projects</h1>
                <div class="h-auto w-auto mx-1 p-4 my-5 flex justify-start sm:justify-center  gap-5 overflow-auto text-nowrap ">
                    <label v-for="(lang, index) in languages" :key="index" :for="lang"
                        class=" text-sm sm:text-base py-3 px-12 sm:w-auto text-nowrap rounded-full border border-1 bg-white border-[#2f3038]  cursor-pointer dark:bg-[#2f3038]"
                        :class="[selectedLangs.includes(lang) ? 'bg-blue-600 text-white dark:text-white font-bold shadow-lg ' : 'dark:text-gray-400 shadow-none']">
                        <input v-model="selectedLangs" type="checkbox" :value="lang" :id="lang" class="relative -z-10 hidden">
                        <span class="whitespace-pre"> {{ lang }} </span>
                    </label>
                </div>
            </div>
            <div class="h-[94%] overflow-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-2 sm:p-4 gap-4">
                <div v-for="data in selectedLangs.length ? filteredProjects : project">
                    <Card class='absolute' :title="data.title" :description='data.description'
                        @get-info="getProjectInfo(data)" />
                </div>
                <Transition name="bounce">
                    <div v-if='isOpenSideDrawer' @click.self="isOpenSideDrawer = false"
                        class='side-drawer top-0 right-0 z-50 fixed  dark:text-black h-full w-full flex justify-center items-center'>
                        <div class='dark:bg-[#2c2e35] bg-white text-[#213547] dark:text-white z-50 py-2 rounded-md sm:w-1/2
                            w-[98%] mx-auto my-auto'>
                            <div class='shadow-md flex h-14  justify-start items-center gap-1 sm:gap-4'>
                                <h1 class="text-xl whitespace-nowrap text-ellipsis overflow-hidden font-bold px-3">
                                    {{ projectInfo.title }}
                                </h1>
                            </div>
                            <div class="mt- text-left px-7 pb-10 pt-4 dark:text-gray-300">
                                <p class="py-2">{{ projectInfo.description }}</p>
                                <p>
                                    <span class="text-black dark:text-white font-bold text-lg ">Live link : </span>
                                    <a :href="projectInfo.live_link" class="text-blue-600 dark:text-blue">
                                        {{ projectInfo.live_link }}</a>
                                </p>
                                <p>
                                    <span class="text-black dark:text-white font-extrabold text-lg">Source code link :
                                    </span>
                                    <a :href="projectInfo.source_code_link" class="text-blue-600 dark:text-blue">
                                        {{ projectInfo.source_code_link }}</a>
                                </p>
                                <div class="mt-1 ml-1" v-for="value, key in projectInfo">
                                    <ul class=" list-disc list-inside mt-3 " v-if="key === 'features'">
                                        <p class="text-black dark:text-white text-xl"> Feature </p>
                                        <li v-for="item in value">{{ item }}</li>
                                    </ul>
                                    <ul class="list-disc list-inside mt-3" v-else-if="key === 'tech_stuff'">
                                        <p class="text-black dark:text-white text-xl"> Tech Stuff </p>
                                        <li v-for="item in value">{{ item }}</li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </Transition>
            </div>
        </div>
    </PageView>
</template>


<script setup lang="ts">
import Card from '../components/Card.vue'
import project from '../assets/projects.json'
import { ref, computed } from 'vue';

const languages = ["HTML", "React JS", "Vue JS", "Java"]

// selected languages
const selectedLangs = ref<string[]>([...languages])

const projectInfo = ref({
    "title": "",
    "live_link": "",
    "source_code_link": "",
    "description": "",
    "tech_stuff": [],
    "features": []
})
const isOpenSideDrawer = ref(false)

// computed to get filtered projects a/c filter selected language
const filteredProjects = computed(() => project.filter((item) => item.tech_stuff.some(tech => selectedLangs.value.includes(tech))));

function getProjectInfo(project: any) {
    projectInfo.value = project;
    isOpenSideDrawer.value = true
}
</script>


<style>
.side-drawer {
    transition: all 0.5s linear;
    background-color: rgba(0, 0, 0, 0.5);
}
</style>