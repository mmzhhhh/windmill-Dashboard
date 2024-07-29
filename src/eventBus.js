// eventBus.js
import { ref } from 'vue';

const eventBus = ref({});

export const on = (event, handler) => {
  if (!eventBus.value[event]) {
    eventBus.value[event] = [];
  }
  eventBus.value[event].push(handler);
};

export const emit = (event, payload) => {
  if (eventBus.value[event]) {
    eventBus.value[event].forEach(handler => handler(payload));
  }
};
