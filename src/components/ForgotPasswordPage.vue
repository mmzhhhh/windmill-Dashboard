<template>
    <div class=" flex items-center min-h-screen p-[30px] bg-gray-50 dark:bg-gray-900">
        <div class=" flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
            <div class=" flex flex-col overflow-y-auto md:flex-row">
                <!-- 图片 -->
                <div class=" h-32 md:h-auto md:w-1/2">
                    <img aria-hidden="true" class="object-cover w-full h-full dark:hidden"
                        src="../img/forgot-password-office.jpeg" alt="Office">
                    <img aria-hidden="true" class=" hidden object-cover w-full h-full dark:block"
                        src="../img/create-account-office-dark.jpeg" alt="Office">
                </div>
                <!-- 注册 -->
                <div class="flex items-center justify-center p-[30px] sm:p-[60px] md:w-1/2">
                    <div class=" w-full">
                        <h1 class=" mb-5 text-xl font-semibold text-gray-700 dark:text-gray-200">Login</h1>
                        <!-- 邮箱 -->
                        <label class=" block text-sm">
                            <span class=" text-gray-700 dark:text-gray-400">Email</span>
                            <input
                                class="w-full mt-1 text-sm py-[10px] px-[15px] border-2 rounded-lg dark:bg-gray-800 dark:text-gray-100"
                                placeholder="Jane Doe">
                        </label>
                        <a href="#"
                            class=" block w-full py-[10px] px-5 mt-5 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-purple-500">Recover password
                            </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>