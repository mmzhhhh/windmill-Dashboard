<template>
  <div class="flex h-screen bg-gray-50 dark:bg-gray-900" @click="handleClick" v-if="showMainLayout">
    <AsideComponent/>   
    <DashboardComponent/>
  </div>
  <RouterView v-else/>
</template>

<script setup>
import { useRoute } from 'vue-router';
import AsideComponent from './components/AsideComponent.vue';
import DashboardComponent from './components/DashboardComponent.vue';
import {emit} from './eventBus.js';
import { computed } from 'vue';

const handleClick=()=>{
  emit('hideDropdowns');
}

const route=useRoute();
const showMainLayout=computed(()=>{
  const onLayoutRoutes=['/login','/forgetPassword','/createAccount'];
  return !onLayoutRoutes.includes(route.path);
})
</script>
