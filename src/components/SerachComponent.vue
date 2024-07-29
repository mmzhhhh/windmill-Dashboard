<template>
    <header class="z-10 py-5 bg-white shadow-md dark:bg-gray-800">
        <div
            class="container flex items-center justify-between h-full px-[30px] mx-auto text-purple-600 dark:text-purple-300">
            <!-- 移动菜单栏按钮 -->
            <button class="p-[5px] mr-[25px] -ml-[5px] rounded-md md:hidden focus:outline-none focus:outline-purple-500"
            @click.stop="toggleContent"    >
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clip-rule="evenodd"></path>
                </svg>
            </button>
            <!-- 搜索框 -->
            <div class="flex justify-center flex-1 lg:mr-40">
                <div class="relative w-full max-w-xl mr-[30px] focus-within:text-purple-500">
                    <div class="absolute inset-y-0 flex items-center pl-[10px]">
                        <svg class="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </div>
                    <input type="text" placeholder="Search for projects"
                        class="w-full pl-10 py-[10px] pr-[10px] text-sm text-gray-700 placeholder-gray-600 bg-gray-100 border-0 rounded-md dark:placeholder-gray-500 dark:bg-gray-700 dark:text-gray-200 dark:focus:ring-2 dark:focus:ring-purple-500 focus:placeholder-gray-500 focus:ring-2 focus:ring-purple-300 focus:bg-white">
                </div>
            </div>
            <ul class="flex items-center flex-shrink-0 space-x-6">
                <!-- 主题切换按钮 -->
                <li class="flex">
                    <button class="rounded-md focus:ring-2 focus:ring-purple-400" @click="toggleTheme">
                        <!-- 暗色模式图标 -->
                        <svg v-if="isDark" class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                        </svg>
                        <!-- 明色模式图标 -->
                        <svg v-else class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd"
                                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </button>
                </li>
                <!-- 消息提醒按钮 -->
                <li class="relative">
                    <button @click.stop="toggleRemind"
                        class="relative align-middle rounded-md focus:ring-2 focus:ring-purple-400">
                        <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z">
                            </path>
                        </svg>
                        <!-- 消息提醒数量提示 -->
                        <span
                            class="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full dark:border-gray-800"></span>
                    </button>
                    <!-- 消息提醒窗口 -->
                    <transition name="fade">
                        <div v-if="isRemindShow"
                            class="absolute right-0 w-56 p-[10px] mt-[10px] space-y-2 text-gray-600 bg-white border border-gray-100 rounded-md shadow-md dark:bg-gray-700 dark:text-gray-300 dark:border-gray-700">
                            <ul>
                                <li class="flex" v-for="(item, index) in remindContent" :key="index">
                                    <a href="#"
                                        class="inline-flex items-center justify-between w-full py-[5px] px-[10px] text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200">
                                        <span>{{ item.title }}</span>
                                        <span
                                            class="inline-flex items-center justify-center py-[5px] px-[10px] text-xs font-bold leading-none text-red-600 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-600">{{
                                            item.num }}</span>
                                    </a>
                                </li>
                                <li class="flex">
                                    <a href="#"
                                        class="inline-flex items-center justify-between w-full py-[5px] px-[10px] text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200">
                                        <span>Alerts</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </transition>
                </li>
                <!-- 用户头像按钮 -->
                <li class="relative">
                    <button class="align-middle rounded-full focus:ring-2 focus:ring-purple-400"
                        @click.stop="toggleAvator">
                        <img class="object-cover w-8 h-8 rounded-full"
                            src="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82"
                            alt="" aria-hidden="true">
                    </button>
                    <!-- 用户菜单 -->
                    <transition name="fade">
                        <div v-if="isAvatorShow"
                            class="absolute right-0 w-56 p-[10px] mt-[10px] space-y-2 text-gray-600 bg-white border border-gray-100 rounded-md shadow-md dark:bg-gray-700 dark:text-gray-300 dark:border-gray-700">
                            <ul>
                                <li class="flex" v-for="(item, index) in avatorContent" :key="index">
                                    <a href="#"
                                        class="inline-flex items-center w-full py-[5px] px-[10px] text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200">
                                        <svg class="w-4 h-4 mr-[15px]" aria-hidden="true" fill="none"
                                            stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <g v-html="item.path"></g>
                                        </svg>
                                        <span>{{ item.title }}</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </transition>
                </li>
            </ul>
        </div>
    </header>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { on,emit } from '../eventBus.js';

// 主题状态，默认值基于 localStorage 或系统首选颜色方案
const isDark = ref(localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme:dark)').matches));
// 消息提醒显示状态
const isRemindShow = ref(false);
// 用户头像菜单显示状态
const isAvatorShow = ref(false);

// 消息提醒内容
const remindContent = ref([
    { title: 'Message', num: '13' },
    { title: 'Sales', num: '2' },
]);

// 用户头像菜单内容
const avatorContent = ref([
    { path: '<path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>', title: 'Profile' },
    { path: '<path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>', title: 'Settings' },
    { path: '<path d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>', title: 'Log out' },
]);

// 切换主题函数
const toggleTheme = () => {
    if (isDark.value) {
        document.documentElement.classList.add("dark");
        localStorage.theme = "light";
    } else {
        document.documentElement.classList.remove("dark");
        localStorage.theme = "dark";
    }
    isDark.value = !isDark.value;
};

// 切换消息提醒显示状态
const toggleRemind = () => {
    isRemindShow.value = !isRemindShow.value;
    isAvatorShow.value = false;
};

// 切换用户头像菜单显示状态
const toggleAvator = () => {
    isAvatorShow.value = !isAvatorShow.value;
    isRemindShow.value = false;
};

// 隐藏下拉菜单函数
const hideDropdown = () => {
    isRemindShow.value = false;
    isAvatorShow.value = false;
};



// 组件挂载后监听事件总线
onMounted(() => {
    on('hideDropdowns', hideDropdown);
});

const toggleContent=()=>{
    emit('toggle-content')
}
</script>

<style scoped>
  /* 渐变效果的过渡动画 */
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s;
  }
  
  .fade-enter-from, .fade-leave-to {
    opacity: 0;
  }
  </style>