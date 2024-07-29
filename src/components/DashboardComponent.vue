<template>
  <div class=" flex flex-col flex-1 w-full" @click="handleAsideClick">
    <SerachComponent />
    <main class=" h-full overflow-y-auto">
      <div class=" container px-[30px] mx-auto grid">
        <RouterView />
      </div>
    </main>
  </div>
</template>

<script setup>
import SerachComponent from './SerachComponent.vue';
import { RouterView } from 'vue-router';
import { emit } from '../eventBus.js';

const handleAsideClick = () => {
  emit('hideDropdownAside');
}

</script>
