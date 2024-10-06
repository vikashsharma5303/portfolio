<template>
    <PageView>
        <div class="h-full w-full flex justify-center items-center">
            <div class="h-full w-full grid sm:grid-flow-col grid-flow-row grid-cols-12 sm:gap-y-2 gap-y-8">
                <div class="sm:col-span-6 col-span-12 flex flex-col justify-center items-center">
                    <div class="p-4">
                        <figure
                            class="shadow-xl hover:shadow-md transition-all delay-200 ease-in-out rounded-full bg-gray-300 dark:bg-[#424450] dark:hover:bg-[#424450] p-2 hover:bg-gray-200 cursor-pointer">
                            <img class="w-64 h-64 sm:w-72 sm:h-72  rounded-full" src="../assets/om.jpg" alt="icon">
                        </figure>
                    </div>
                    <div class="mt-4 text-left pl-1 w-96 sm:w-3/4 bg-gray-400 dark:bg-[#424450] text-lg shadow-md rounded-md">
                        <!-- class="ml-1 pl-4 bg-white dark:sm:bg-[#213547] dark:bg-[#213c54] dark:hover:bg-[#183a59] p-2"> -->
                        <div
                            class="ml-1 pl-4 bg-white dark:text-gray-300 dark:sm:bg-[#2c2e35] dark:bg-[#2c2e35] p-2">
                            <p class="first-letter:text-4xl first-letter:text-rose-600 dark:first-letter:text-white py-3">
                                I'm a Computer Science student from Bihar, currently studying for my MCA at Chandigarh University since 2023.
                                 My interest in computers started back in 2017 when I began my BCA. 
                                 That's where I first learned about computer concepts and different programming languages. 
                                 I started with C and slowly learned more, eventually discovering my love for JavaScript.
                                  React.js and Vue.js has become my favorite library/framework for web development.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="text-left sm:col-span-6 col-span-12 flex justify-center items-center">
                    <div
                    class="border-t-8 dark:bg-[#2c2e35] dark:text-gray-300 border-gray-400 dark:border-[#424450] relative shadow-md px-7 py-8 rounded-md mb-6">
                    <h1 class="text-3xl mb-5 relative">
                            <span class="underline underline-offset-8"> About Me</span>
                            <span class="absolute hover:static animate-bounce">👨️</span>
                        </h1>
                        <div v-for="item in list">
                            <p class="text-lg">
                                <span class="absolute animate-wiggle">👉</span>
                                <span class="ml-8"> {{ item }}</span>
                            </p>
                        </div>
                        <p class="text-lg">
                            <span class="absolute animate-wiggle">👉</span>
                            <span class="ml-8"> You can contact me at
                                <span class="text-blue-800 text-xl">
                                    <a href="mailto:omprakashkartik82280@gmail.com" target="_blank">omprakashkartik82280@gmail.com</a>
                                </span>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </PageView>
</template>


<script setup lang="ts">

const list = [
    'I am a Front End Developer from India 🇮🇳.',
    'I’m working as a Front End Developer for building web applications.',
    'Exploring coding problems.',
    'I’m currently learning MERN and MEVN stack.',
]

</script>