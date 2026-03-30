<template>
    <PageView>
        <div class="h-full w-full flex justify-center items-center">
            <div class="h-full w-full grid sm:grid-flow-col grid-flow-row grid-cols-12 sm:gap-y-2 gap-y-8">
                <div class="sm:col-span-6 col-span-12 flex flex-col justify-center items-center">
                    <div class="p-4">
                        <figure
                            class="shadow-xl hover:shadow-md transition-all delay-200 ease-in-out rounded-full bg-gray-300 dark:bg-[#424450] dark:hover:bg-[#424450] p-2 hover:bg-gray-200 cursor-pointer">
                            <img class="w-64 h-64 sm:w-72 sm:h-72  rounded-full" src="../assets/vikash.jpg" alt="icon">
                        </figure>
                    </div>
                    <div class="mt-4 text-left pl-1 w-96 sm:w-3/4 bg-gray-400 dark:bg-[#424450] text-lg shadow-md rounded-md">
                        <!-- class="ml-1 pl-4 bg-white dark:sm:bg-[#213547] dark:bg-[#213c54] dark:hover:bg-[#183a59] p-2"> -->
                        <div
                            class="ml-1 pl-4 bg-white dark:text-gray-300 dark:sm:bg-[#2c2e35] dark:bg-[#2c2e35] p-2">
                            <p class="first-letter:text-4xl first-letter:text-rose-600 dark:first-letter:text-white py-3">
                                I hold an MCA from Chandigarh University and a BCA from Bhimrao Ambedkar Bihar University. 
                                My professional journey ranges from being a Test Analyst to a Software Test Engineer, 
                                where I've spent over 5 years mastering end-to-end test automation. Along the way, 
                                I've developed a deep proficiency in tools like Selenium, Cypress, and Playwright 
                                for ensuring rock-solid web, mobile, and API applications.
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
                                    <a href="mailto:vikash.sharma.qa@gmail.com" target="_blank">vikash.sharma.qa@gmail.com</a>
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
    'I am a Software Test Engineer from India 🇮🇳.',
    'Specializing in end-to-end test automation for web, mobile, and API platforms.',
    'Working with CI/CD integrations using GitHub Actions & Docker.',
    'Expertise in modern frameworks like Cypress, Playwright, and Selenium.',
]

</script>