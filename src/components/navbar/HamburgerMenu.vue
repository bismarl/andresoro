<script setup>
import { useRoute } from 'vue-router'
import { reactive } from "vue";

import { TransitionChild, TransitionRoot } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";

const location = useRoute();

const state = reactive({
  open: false,
});

const props = defineProps({
  routes: Array,
});

function toogle() {
  state.open = !state.open;
}
</script>

<template>
  <div class="fixed w-full mx-auto ml-4 -mt-8 z-50">
    <!-- Mobile menu button-->
    <div @click="toogle"
      class="items-center justify-start text-gray-600 hover:cursor-pointer hover:text-gray-800">
      <span class="sr-only">Open main menu</span>
      <Bars3Icon v-if="!state.open" class="icon" />
      <XMarkIcon v-else class="icon" />
    </div>

    <TransitionRoot as="template" :show="state.open">
      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-h-0"
        enter-to="opacity-100 translate-h-full" leave="ease-in duration-200" leave-from="opacity-100 translate-h-full"
        leave-to="opacity-0 translate-h-0">
        <div
          class="fixed top-0 ml-12 mt-4 bg-white text-gray-600 w-52 space-y-5 px-5 py-5 border-2 border-gray-100 rounded-lg shadow-sm z-50">
          <a @click="state.open = false" v-for="route in props.routes" :key="route.name" :href="route.path"
            class="block text-lg text-left uppercase hover:font-bold"
            :class="{ 'font-bold': (location.fullPath === route.path) }">{{ route.name
            }}</a>
        </div>
      </TransitionChild>
    </TransitionRoot>
  </div>
</template>

<style lang="postcss" scoped>
.icon {
  @apply block h-10 w-10 p-2 border-2 border-gray-100 rounded-full shadow-sm bg-white;
}
</style>
