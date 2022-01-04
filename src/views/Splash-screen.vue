<script setup>
import readingIllustration from '../assets/images/reading-time.svg'
</script>

<template>
    <div
        class="flex flex-col min-h-screen mx-auto lg:flex-row lg:items-center lg:justify-center max-w-7xl"
    >
        <readingIllustration
            class="mt-20 mb-16 max-w-[280px] lg:max-w-lg mx-auto"
        ></readingIllustration>
        <div class="flex flex-col lg:mx-auto">
            <div class="text-center max-w-[250px] lg:max-w-md mx-auto mb-16">
                <h1
                    class="mb-4 text-2xl font-semibold lg:text-4xl text-primary"
                >
                    Reading is a hobby!
                </h1>
                <p
                    class="text-xs font-medium leading-6 lg:text-base px-7 text-zinc-400"
                >
                    Enjoy reading amazing novels by powerful writes from all
                    over the world
                </p>
            </div>
            <div
                class="flex flex-col items-center justify-center px-6 md:flex-row md:gap-6"
            >
                <router-link
                    class="w-full px-6 py-4 mb-6 font-semibold text-center text-white transition-colors duration-300 border border-primary bg-primary rounded-xl hover:bg-primary-dark md:mb-0"
                    :to="'/signup'"
                    >Sign up</router-link
                >
                <router-link
                    class="w-full px-6 py-4 font-semibold text-center transition duration-300 bg-white border text-primary border-primary rounded-xl hover:bg-primary-dark hover:border-primary-dark hover:text-white"
                    :to="'/login'"
                    >Log in</router-link
                >
            </div>
        </div>
    </div>
</template>
