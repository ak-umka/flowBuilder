<template>
  <div class="flex h-screen font-roboto">
    <Sidebar />

    <div class="w-full h-auto">
      <slot />
      <!-- <Footer /> -->
    </div>
  </div>
</template>

<script setup>
import Sidebar from "./Sidebar.vue";
// import Footer from './Footer.vue'
</script>
