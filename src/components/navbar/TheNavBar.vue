<script setup>
import { useRoute } from 'vue-router'
const location = useRoute();

let routes = [
  { name: "A propos", path: "/" },
  { name: "Publications", path: "/publications" },
  { name: "Enseignement", path: "/teaching" },
  //{ name: "CV", path: "/resume" },
];
</script>

<template>
  <nav class="!px-10 !h-20 space-x-4 fixed-top top-0 !mx-0 !mt-0 w-full">
    <div class="flex flex-row items-center w-full"><a class="text-2xl font-bold" href="/">André Soro, PhD</a></div>
    <div class="flex flex-row justify-end items-center w-full">
      <a v-for="route in routes" :key="route.id" :href="route.path"
        class="md:px-4 lg:px-4 py-2 text-md bg-transparent uppercase hover:font-extrabold transition-all duration-500"
        :class="{ 'font-bold md:font-extrabold': (location.fullPath === route.path) }">{{
        route.name }}
      </a>
      <a target="_blank" href="/CV.pdf"
        class="md:px-4 lg:px-4 py-2 text-md bg-transparent uppercase hover:font-extrabold transition-all duration-500">
        CV
      </a>
    </div>
  </nav>
</template>
