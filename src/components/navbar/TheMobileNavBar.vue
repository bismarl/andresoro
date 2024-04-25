<script setup>
import HamburgerMenu from "@/components/navbar/HamburgerMenu.vue";

let routes = [
  { name: "A propos", path: "/" },
  { name: "Publications", path: "/publications" },
  { name: "Enseignement", path: "/teaching" },
  { name: "CV", path: "/resume" },
];
</script>

<template>
  <nav class="flex items-center h-14 mx-2 fixed top-0 m-2 z-50">
    <div class="flex items-center w-full">
      <HamburgerMenu :routes="routes" />
    </div>
  </nav>
</template>
