<template>
    <div>
        <!-- title -->
        <h2 class=" my-[30px] text-2xl font-semibold text-gray-700 dark:text-gray-200">Dasshboard</h2>
        <!-- CTA -->
        <GithubView />
        <!-- Cards -->
        <div class=" grid gap-6 mb-10 md:grid-cols-2 xl:grid-cols-4">
            <!-- Card for -->
            <div class=" flex p-5 items-center bg-white rounded-lg shadow-sm dark:bg-gray-800"
                v-for="(card, index) in cards" :key="index">
                <!-- svg -->
                <div class="p-[15px] mr-5 rounded-full" :class="card.class">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <g v-html=card.path></g>
                    </svg>
                </div>
                <!-- content -->
                <div>
                    <p class=" mb-[10px] text-sm font-medium text-gray-600 dark:text-gray-400">{{ card.title }}</p>
                    <p class=" text-lg font-semibold text-gray-700 dark:text-gray-200">{{ card.num }}</p>
                </div>
            </div>
        </div>
        <!-- New Table -->
        <div class=" w-full overflow-hidden rounded-lg shadow-xl">
            <!-- 列表 -->
            <div class=" w-full overflow-x-auto">
                <table class=" w-full whitespace-nowrap">
                    <thead>
                        <tr
                            class=" text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-100 dark:text-gray-400 dark:bg-gray-800">
                            <th class=" px-5 py-[15px]" v-for="(item,index) in theadName" :key="index">{{ item }}</th>
                        </tr>
                    </thead>
                    <tbody class=" bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                        <tr class=" text-gray-700 dark:text-gray-400" v-for="(item,index) in tbodyContent" :key="index">
                            <!-- 个人信息 -->
                            <td class=" px-5 py-[15px]">
                                <div class=" flex items-center text-sm">
                                    <!-- 头像 -->
                                    <div class=" relative hidden w-10 h-10 md:block mr-[15px] rounded-full">
                                        <img class="object-cover w-full h-full rounded-full" :src=item.img>
                                    </div>
                                    <!-- 名字和职业 -->
                                    <div>
                                        <p class=" font-semibold">{{ item.name }}</p>
                                        <p class=" text-xs text-gray-600 dark:text-gray-400">{{ item.job }}</p>
                                    </div>
                                </div>
                            </td>
                            <!-- 金额 -->
                            <td class=" px-5 py-[15px] text-sm">
                                ${{ item.amount }}
                            </td>
                            <td class=" px-5 py-[15px] text-xs">
                                <span class=" py-[5px] px-[10px] font-semibold leading-tight rounded-full" :class=item.class>{{ item.status }}</span>
                            </td>
                            <td class=" py-[15px] px-5 text-sm">{{ item.date }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <!-- 选页 -->
            <div>

            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import GithubView from './GithubView.vue';
const cards = ref([
    {
        path: '<path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>',
        title: 'Total Clients',
        num: '6389',
        class: 'text-orange-500 bg-orange-100 dark:text-orange-100 dark:bg-orange-500'
    },
    {
        path: '<path fill-rule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>',
        title: 'Account balance',
        num: '$ 46,760.89',
        class: 'text-green-500 bg-green-100 dark:text-green-100 dark:bg-green-500'
    },
    {
        path: '<path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>',
        title: 'New sales',
        num: '376',
        class: 'text-blue-500 bg-blue-100 dark:text-blue-100 dark:bg-blue-500'
    },
    {
        path: '<path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd"></path>',
        title: 'Pending contacts',
        num: '35',
        class: 'text-teal-500 bg-teal-100 dark:text-teal-100 dark:bg-teal-500'
    }
])

const theadName=ref(['client','amount','status','date']);
const tbodyContent=ref([
    {
        name:'Hans Burger',
        job:'10x Developer',
        amount:'863.45',
        status:'Approved',
        date:'6/10/2020',
        class:'text-green-700 bg-green-100 dark:bg-green-700 dark:text-green-100',
        img:'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
    },
    {
        name:'Jolina Angelie',
        job:'Unemployed',
        amount:'369.95',
        status:'Pending',
        date:'6/10/2020',
        class:'text-orange-700 bg-orange-100 dark:text-white dark:bg-orange-600',
        img:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&facepad=3&fit=facearea&s=707b9c33066bf8808c934c8ab394dff6',
    },{
        name:'Sarah Curry',
        job:'Designer',
        amount:'86.00',
        status:'Denied',
        date:'6/10/2020',
        class:'text-red-700 bg-red-100 dark:text-red-100 dark:bg-red-700',
        img:'https://images.unsplash.com/photo-1551069613-1904dbdcda11?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
    },{
        name:'Rulia Joberts',
        job:'Actress',
        amount:'1276.45',
        status:'Approved',
        date:'6/10/2020',
        class:'text-green-700 bg-green-100 dark:bg-green-700 dark:text-green-100',
        img:'https://images.unsplash.com/photo-1551006917-3b4c078c47c9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
    },{
        name:'Wenzel Dashington',
        job:'Actor',
        amount:'863.45',
        status:'Expired',
        date:'6/10/2020',
        class:'text-gray-700 bg-gray-100 dark:text-gray-100 dark:bg-gray-700',
        img:'https://images.unsplash.com/photo-1546456073-6712f79251bb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
    },{
        name:'Dave Li',
        job:'Influencer',
        amount:'863.45',
        status:'Approved',
        date:'6/10/2020',
        class:'text-green-700 bg-green-100 dark:bg-green-700 dark:text-green-100',
        img:'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
    },{
        name:'Maria Ramovic',
        job:'Runner',
        amount:'863.45',
        status:'Approved',
        date:'6/10/2020',
        class:'text-green-700 bg-green-100 dark:bg-green-700 dark:text-green-100',
        img:'https://images.unsplash.com/photo-1566411520896-01e7ca4726af?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
    },{
        name:'Hans Burger',
        job:'10x Developer',
        amount:'863.45',
        status:'Approved',
        date:'6/10/2020',
        class:'text-green-700 bg-green-100 dark:bg-green-700 dark:text-green-100',
        img:'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
    },
])
</script>
