<script setup>
import logInIllustration from '../assets/images/login.svg'
</script>

<template>
    <div
        class="flex flex-col min-h-screen mx-auto lg:flex-row lg:items-center lg:justify-center max-w-7xl"
    >
        <logInIllustration
            class="mt-14 mb-8 max-w-[200px] lg:max-w-lg mx-auto"
        ></logInIllustration>
        <div class="flex flex-col max-w-lg mx-auto">
            <div class="text-center">
                <h1
                    class="mb-1 text-2xl font-semibold lg:text-4xl text-primary"
                >
                    Welcome back!
                </h1>
                <p
                    class="text-xs font-medium leading-6 lg:text-base px-7 text-zinc-400"
                >
                    Log in into your existing account
                </p>
            </div>
            <div class="px-5 mt-10 mb-6">
                <input
                    class="w-full px-4 py-4 mb-6 font-medium transition duration-300 rounded-lg outline-none d-block bg-primary-100 ring-primary focus:ring-2"
                    type="email"
                    placeholder="E-mail"
                />
                <input
                    class="w-full px-4 py-4 mb-1 font-medium transition duration-300 rounded-lg outline-none d-block bg-primary-100 ring-primary focus:ring-2"
                    type="password"
                    placeholder="Password"
                />
                <span
                    class="inline-block mb-6 text-xs font-semibold hover:cursor-pointer text-primary hover:text-primary-dark focus:text-primary-dark"
                    >Forgot password?</span
                >
                <button
                    type="button"
                    class="w-full px-6 py-4 font-semibold text-center text-white transition-colors duration-300 border border-primary bg-primary rounded-xl hover:bg-primary-dark focus:bg-primary-dark"
                >
                    Log in
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
                    Don't have an account?
                    <router-link
                        class="font-semibold text-primary hover:text-primary-dark focus:text-primary-dark"
                        :to="'/signup'"
                        >Sign up</router-link
                    >
                </p>
            </div>
        </div>
    </div>
</template>
