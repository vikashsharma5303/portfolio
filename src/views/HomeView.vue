<template>
    <PageView>
        <div class="text-left">
            <h1 class="sm:text-6xl text-4xl relative">Hi<span class="absolute animate-wiggle">👋</span>
                <span class="relative sm:left-[76px] left-[48px]">, my</span>
                <br />
                name is <span class="font-bold font-sans text-rose-500">Om prakash. </span>
            </h1>
            <p class="text-3xl mt-3"><span class="text-teal-600 font-medium">Front End Developer!</span></p>
            <p class="pt-4 sm:text-xl text-lg font-arial">A passionate <span class="font-bold ">Front End Developer</span> with a diverse skill set, committed to crafting engaging and practical web applications.</p>
            <div class="mt-8 flex">
                <div class='mr-3' v-for="navigation in navigationLinks">
                    <RouterLink :to="{ name: navigation.name }">
                        <button
                            :class="['dark:hover:text-gray-300 focus:outline-0 w-28 p-3 dark:bg-[#2f3038] dark:hover:opacity-75 shadow-md', navigation.color]">
                            {{ navigation.label }}
                        </button>
                    </RouterLink>
                </div>
            </div>
            <div class="mt-5 flex pl-1">
                <div class="hover:animate-wiggle h-7 w-7 mr-3 rounded-full ring-4 ring-gray-300 dark:ring-[#4b4b4b]"
                    v-for="link in socialLinks">
                    <a :href="link.url" :title="link.name" target="_blank">
                        <img class="dark:invert" :src="getUrl(link.img_url)" :alt="link.name">
                    </a>
                </div>
            </div>
        </div>
        <div class="relative">
            <figure
                class="rounded-full shadow-xl hover:shadow-md transition-all delay-200 ease-in-out rounded-full1 bg-gray-300 dark:bg-[#424450] dark:hover:bg-[#424450] p-2 hover:bg-gray-200 cursor-pointer">
                <img class="w-72 h-72 sm:w-80 sm:h-80 rounded-full" src="../assets/om.jpg" alt="icon">
            </figure>
            <div
                class="absolute top-10 left-4 pr-2 justify-center border-4 border-pink-500 dark:border-[#63646e] p-1 rounded-full">
                <button id="download"
                    class="flex border-0 focus:outline-0 outline-white justify-center text-white bg-pink-500 dark:bg-[#63646e] p-2 rounded-full"
                    @click="download">
                    <MdIcon text="link" class="text-white mr-1" />
                    <span id="text">Resume</span>
                </button>
            </div>
        </div>
    </PageView>
</template>


<script setup lang="ts">
import { ref, onUnmounted, onMounted } from 'vue';

const socialLinks = [{
    name: 'Github',
    url: 'http://github.com/kom50',
    img_url: 'github.png'
},{
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/om-prakash-sah',
    img_url: 'linkedinD.png'
},{
    name: 'Email',
    url: 'mailto:omprakashkartik82280@gmail.com',
    img_url: 'email.png'
}]

const navigationLinks = [{
    name: 'about',
    color: 'bg-green-500',
    label: 'About Me'
}, {
    name: 'project',
    color: 'bg-amber-500',
    label: 'Projects'
}, {
    name: 'skills',
    color: 'bg-slate-300',
    label: 'Skills'
}]
function getUrl(url: string) {
    return new URL(`../assets/${url}`, import.meta.url).href;
}

const text = ref('Front End Developer')
const title = ref('Front End Developer')

// Animate text

const intervalTimer = setInterval(() => {
    text.value = ''
    for (let i = 0; i < title.value.length; i++) {
        const timer = setTimeout(() => {
            text.value += title.value[i]
            clearTimeout(timer)
        }, i * 200)
    }
}, 5000)

onUnmounted(() => {
    clearInterval(intervalTimer)
})

const downloadURL = ref('')

onMounted(() => {
    fetch(new URL('../assets/om_prakash_cv.pdf', import.meta.url).href).then(res => {
        return res.blob()
    }).then((data) => {
        downloadURL.value = URL.createObjectURL(data)
    }).catch((err) => {
        console.log("err", err)
    })
})


function download() {
    const anchor = document.createElement('a')
    anchor.href = downloadURL.value
    // anchor.download = 'om.pdf'
    anchor.click()
}

</script>


<style>
/* .img {
    border-radius: 46% 54% 47% 53% / 65% 36% 64% 35%;
} */

/* .bg-img {
    border-radius: 46% 54% 47% 53% / 65% 36% 64% 35%
} */


#download #text {
    display: none;
    transition: all;
    transition-delay: 1s;
    transition-timing-function: ease-in-out;
}

#download:hover #text,
#download:focus #text {
    display: inline;
}
</style>