<script setup>
import { ref } from 'vue'
import readingIllustration from '../assets/images/reading.svg'

const passwordFieldType = ref('password')
const switchVisibility = () =>
    (passwordFieldType.value =
        passwordFieldType.value === 'password' ? 'text' : 'password')
</script>

<template>
    <div
        class="flex flex-col min-h-screen mx-auto lg:flex-row lg:items-center lg:justify-center max-w-7xl"
    >
        <readingIllustration
            class="mt-14 mb-8 max-w-[200px] lg:max-w-lg mx-auto"
        ></readingIllustration>
        <div class="flex flex-col max-w-lg mx-auto">
            <div class="text-center">
                <h1
                    class="mb-1 text-2xl font-semibold lg:text-4xl text-primary"
                >
                    Let's Get Started!
                </h1>
                <p
                    class="text-xs font-medium leading-6 lg:text-base px-7 text-zinc-400"
                >
                    Create an account
                </p>
            </div>
            <div class="px-5 mt-10 mb-6">
                <input
                    class="w-full px-4 py-4 mb-6 font-medium transition duration-300 rounded-lg outline-none d-block bg-primary-100 ring-primary focus:ring-2 placeholder:text-gray-400"
                    type="text"
                    placeholder="Full name"
                />
                <input
                    class="w-full px-4 py-4 mb-6 font-medium transition duration-300 rounded-lg outline-none d-block bg-primary-100 ring-primary focus:ring-2 placeholder:text-gray-400"
                    type="email"
                    placeholder="E-mail"
                />
                <div class="relative">
                    <input
                        class="w-full px-4 py-4 font-medium transition duration-300 rounded-lg outline-none d-block bg-primary-100 ring-primary focus:ring-2 placeholder:text-gray-400"
                        :type="passwordFieldType"
                        placeholder="Password"
                    />
                    <button
                        class="absolute -translate-y-1/2 right-4 top-1/2"
                        @click="switchVisibility"
                    >
                        <template v-if="passwordFieldType === 'password'">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="w-6 h-6 cursor-pointer text-slate-400"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
                                    clip-rule="evenodd"
                                />
                                <path
                                    d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"
                                />
                            </svg>
                        </template>
                        <template v-else>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="w-6 h-6 cursor-pointer text-slate-400"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                <path
                                    fill-rule="evenodd"
                                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </template>
                    </button>
                </div>
                <button
                    type="button"
                    class="w-full px-6 py-4 mt-6 font-semibold text-center text-white transition-colors duration-300 border border-primary bg-primary rounded-xl hover:bg-primary-dark focus:bg-primary-dark"
                >
                    Sign up
                </button>
            </div>
            <div class="flex flex-col px-5 mb-10 text-center">
                <span class="mb-3 text-xs text-gray-300">or continue with</span>
                <div class="flex flex-row gap-3 mb-4">
                    <button
                        type="button"
                        class="flex justify-center p-4 transition duration-300 rounded-lg bg-primary-100 grow hover:bg-primary-200 focus:bg-primary-200"
                    >
                        <svg
                            class="text-gray-500 fill-current w-7 h-7"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 30 30"
                        >
                            <path
                                d="M12,27V15H8v-4h4V8.852C12,4.785,13.981,3,17.361,3c1.619,0,2.475,0.12,2.88,0.175V7h-2.305C16.501,7,16,7.757,16,9.291V11 h4.205l-0.571,4H16v12H12z"
                            />
                        </svg>
                    </button>
                    <button
                        type="button"
                        class="flex justify-center p-4 transition duration-300 rounded-lg bg-primary-100 grow hover:bg-primary-200 focus:bg-primary-200"
                    >
                        <svg
                            class="text-gray-500 fill-current w-7 h-7"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <g
                                stroke="none"
                                stroke-width="1"
                                fill="none"
                                fill-rule="evenodd"
                            >
                                <g fill-rule="nonzero">
                                    <path
                                        class="fill-current"
                                        d="M11.99,13.9 L11.99,10.18 L21.35,10.18 C21.49,10.81 21.6,11.4 21.6,12.23 C21.6,17.94 17.77,22 12,22 C6.48,22 2,17.52 2,12 C2,6.48 6.48,2 12,2 C14.7,2 16.96,2.99 18.69,4.61 L15.85,7.37 C15.13,6.69 13.87,5.89 12,5.89 C8.69,5.89 5.99,8.64 5.99,12.01 C5.99,15.38 8.69,18.13 12,18.13 C15.83,18.13 17.24,15.48 17.5,13.91 L11.99,13.91 L11.99,13.9 Z"
                                    />
                                </g>
                            </g>
                        </svg>
                    </button>
                </div>
                <p class="text-sm text-gray-500">
                    Already have an account?
                    <router-link
                        class="font-semibold text-primary hover:text-primary-dark focus:text-primary-dark"
                        :to="'/login'"
                        >Log in</router-link
                    >
                </p>
            </div>
        </div>
    </div>
</template>
