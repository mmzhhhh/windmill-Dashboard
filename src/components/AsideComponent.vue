<template>
    <!-- 桌面端侧边栏 -->
    <aside class="hide-scrollbar z-20 w-80 overflow-y-auto bg-white dark:bg-gray-800 md:block flex-shrink-0 hidden">
        <div class=" py-5 text-gray-500 dark:text-gray-400">
            <a href="#" class=" ml-[30px] text-gray-800 dark:text-gray-200 font-bold text-lg">Windmill</a>
            <ul class=" mt-[30px]">
                <li class=" relative py-[15px] px-[30px]" v-for="(item, index) in svgAndTitle" :key="index">
                    <RouterLink :to="item.to" @click.stop="setActive(index)">
                        <span class=" absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
                            aria-hidden="true" v-show="item.active">

                        </span>
                        <a href="#"
                            class=" inline-flex items-center w-full text-sm font-semibold  transition-colors duration-150 hover:text-gray-800  dark:hover:text-gray-200"
                            :class="toggleTextColor(item)">
                            <svg class="w-5 h-5" aria-hidden="true" fill="none" stroke-linecap="round"
                                stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                <g v-html="item.path"></g>
                            </svg>
                            <span class=" ml-5">{{ item.title }}</span>
                        </a>
                    </RouterLink>
                </li>
                <!-- Page侧边栏 -->
                <li class=" relative py-[15px] px-[30px]">
                    <button
                        @click="togglePage"
                        class=" inline-flex items-center justify-between w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-100 "
                        :class="changeText">
                        <span class=" inline-flex items-center">
                            <svg class="w-5 h-5" aria-hidden="true" fill="none" stroke-linecap="round"
                                stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path
                                    d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z">
                                </path>
                            </svg>
                            <span class=" ml-5">
                                Pages
                            </span>
                        </span>
                        <span>
                            <svg class="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </span>
                    </button>
                    <transition name="fade">
                        <ul
                        v-show="PageShow"
                        class=" mt-[10px] p-[10px] space-y-2 overflow-hidden text-sm font-medium text-gray-500 rounded-md shadow-inner bg-gray-100 dark:text-gray-400 dark:bg-gray-900"
                        :class="changeText">
                        <li
                            class="py-[5px] px-[10px] transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 hover:underline underline-offset-4">
                            <RouterLink to="/login">
                                Login
                            </RouterLink></li>
                        <li
                            class="py-[5px] px-[10px] transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 hover:underline underline-offset-4">
                            <RouterLink to="/forgetPassword">
                                Forgot Password
                            </RouterLink></li>
                        <li
                            class="py-[5px] px-[10px] transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 hover:underline underline-offset-4">
                            <RouterLink to="/createAccount">
                                Create Account
                            </RouterLink></li>
                        <li
                            class="py-[5px] px-[10px] transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 hover:underline underline-offset-4">
                            404</li>
                        <li
                            class="py-[5px] px-[10px] transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 hover:underline underline-offset-4">
                            Blank</li>
                    </ul>
                    </transition>
                </li>
            </ul>
            <!-- 创造账户按钮 -->
            <div class=" my-[30px] px-[30px] ">
                <button
                    class=" flex items-center justify-between w-full py-[10px] px-[20px] text-sm  font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:outline-purple-500">
                    Create account
                    <span class=" ml-[10px]">
                        +
                    </span>
                </button>
            </div>
        </div>
    </aside>
    <!-- 移动端侧边栏 -->
    <transition name="slide">
        <aside class=" mt-20 fixed inset-y-0 flex-shrink-0 w-[280px] hide-scrollbar overflow-auto bg-white dark:bg-gray-800 md:hidden z-20 rounded-r-xl" v-if="isVisible">
        <div class=" py-5 text-gray-500 dark:text-gray-400">
            <a href="#" class=" ml-[30px] text-gray-800 dark:text-gray-200 font-bold text-lg">Windmill</a>
            <ul class=" mt-[30px]">
                <li class=" relative py-[15px] px-[30px]" v-for="(item, index) in svgAndTitle" :key="index">
                    <RouterLink :to="item.to" @click.stop="setActiveMobile(index)">
                        <span class=" absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
                            aria-hidden="true" v-show="item.active">

                        </span>
                        <a href="#"
                            class=" inline-flex items-center w-full text-sm font-semibold  transition-colors duration-150 hover:text-gray-800  dark:hover:text-gray-200"
                            :class="toggleTextColor(item)">
                            <svg class="w-5 h-5" aria-hidden="true" fill="none" stroke-linecap="round"
                                stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                <g v-html="item.path"></g>
                            </svg>
                            <span class=" ml-5">{{ item.title }}</span>
                        </a>
                    </RouterLink>
                </li>
                <!-- Page侧边栏 -->
                <li class=" relative py-[15px] px-[30px]">
                    <button
                        @click="togglePage"
                        class=" inline-flex items-center justify-between w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-100 "
                        :class="changeText">
                        <span class=" inline-flex items-center">
                            <svg class="w-5 h-5" aria-hidden="true" fill="none" stroke-linecap="round"
                                stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path
                                    d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z">
                                </path>
                            </svg>
                            <span class=" ml-5">
                                Pages
                            </span>
                        </span>
                        <span>
                            <svg class="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </span>
                    </button>
                    <transition name="fade">
                        <ul
                        v-show="PageShow"
                        class=" mt-[10px] p-[10px] space-y-2 overflow-hidden text-sm font-medium text-gray-500 rounded-md shadow-inner bg-gray-100 dark:text-gray-400 dark:bg-gray-900"
                        :class="changeText">
                        <li
                            class="py-[5px] px-[10px] transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 hover:underline underline-offset-4">
                            <RouterLink to="/login">
                                Login
                            </RouterLink></li>
                        <li
                            class="py-[5px] px-[10px] transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 hover:underline underline-offset-4">
                            <RouterLink to="/forgetPassword">
                                Forgot Password
                            </RouterLink></li>
                        <li
                            class="py-[5px] px-[10px] transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 hover:underline underline-offset-4">
                            <RouterLink to="/createAccount">
                                Create Account
                            </RouterLink></li>
                        <li
                            class="py-[5px] px-[10px] transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 hover:underline underline-offset-4">
                            404</li>
                        <li
                            class="py-[5px] px-[10px] transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 hover:underline underline-offset-4">
                            Blank</li>
                    </ul>
                    </transition>
                </li>
            </ul>
            <!-- 创造账户按钮 -->
            <div class=" my-[30px] px-[30px] ">
                <button
                    class=" flex items-center justify-between w-full py-[10px] px-[20px] text-sm  font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:outline-purple-500">
                    Create account
                    <span class=" ml-[10px]">
                        +
                    </span>
                </button>
            </div>
        </div>
    </aside>
    </transition>
    <div v-if="isVisible" @click="isVisible = false" class="fixed inset-0 bg-black opacity-50 z-10 dark:opacity-10"></div>
</template>

<script setup>
import { ref, onMounted, watch, computed,} from 'vue';
import { RouterLink, useRoute, useRouter } from 'vue-router';
import {on} from '../eventBus'

const isVisible=ref(false);
const PageShow=ref(false);

// 定义菜单项数组，每项包括路径、标题、激活状态和目标路由
const svgAndTitle = ref([
    {
        path: '<path d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"></path>',
        title: "Dashboard",
        active: false,
        to: '/dashboard',
    },
    {
        path: '<path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>',
        title: "Forms",
        active: false,
        to: '/forms'
    },
    {
        path: '<path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>',
        title: "Cards",
        active: false,
        to: '/cards'
    },
    {
        path: '<path d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path><path d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>',
        title: "Charts",
        active: false,
        to: '/charts'
    },
    {
        path: '<path d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"></path>',
        title: "Buttons",
        active: false,
        to: '/buttons',
    },
    {
        path: '<path d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>',
        title: "Modals",
        active: false,
        to: '/modals'
    },
    {
        path: '<path d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>',
        title: "Tables",
        active: false,
        to: '/tables'
    },
]);

// 获取当前路由信息
const route = useRoute();
const router = useRouter();

// 根据菜单项的激活状态返回相应的 CSS 类名
const toggleTextColor = (item) => {
    return item.active ? 'text-gray-800 dark:text-gray-100' : 'text-gray-400 dark:text-gray-500';
}

//设置点击的菜单项为激活状态，并导航到对应的路由
const setActive = (index) => {
    svgAndTitle.value.forEach((item, i) => {
        //遍历寻找对应的路由
        item.active = i === index;
    });
    router.push(svgAndTitle.value[index].to);//手动导航到对应的路由
}

//设置点击的菜单项为激活状态，并导航到对应的路由
const setActiveMobile = (index) => {
    svgAndTitle.value.forEach((item, i) => {
        //遍历寻找对应的路由
        item.active = i === index;
    });
    router.push(svgAndTitle.value[index].to);//手动导航到对应的路由
    isVisible.value=false;
}

//根据当前的路由更新激活的菜单项
const updateActiveItem = () => {
    svgAndTitle.value.forEach((item) => {
        //寻找对应的路由
        item.active = item.to === route.path
    })
}

//组件挂载时调用updateActiveItem初始化激活状态
onMounted(() => {
    updateActiveItem();
})

//监视路由变化，并在路由变化时调用updateActiveItem更新激活状态
watch(route, () => {
    updateActiveItem();
})

//Page子目录弹出隐藏方法
const togglePage=()=>{
    PageShow.value=!PageShow.value;
}
//Page字体颜色点击变化效果
const changeText=computed(()=>{
    return PageShow.value?'text-gray-800 dark:text-gray-100' : 'text-gray-400 dark:text-gray-500'
})

const handleToggleContent=()=>{
    isVisible.value=!isVisible.value
}
// 组件挂载后监听事件总线

onMounted(() => {
    on('hideDropdownAside', hideAsideMobile);
});

const hideAsideMobile=()=>{
    isVisible.value=false;
}



//监听‘toggle-content'事件
on('toggle-content',handleToggleContent);
</script>

<style scoped>
/* 从左往右滑出效果 */
.slide-enter-active,.slide-leave-active{
    transition: transform .5s ease;
}
.slide-enter-from,.slide-leave-to{
    transform: translateX(-100%);
}

.slide-enter-to,.slide-leave{
    transform: translateX(0%);
}

/* 淡入淡出效果 */
.fade-enter-active,.fade-leave-active{
    transition: opacity 0.3s;
}

.fade-enter-from,.fade-leave-to{
    opacity: 0;
}
</style>