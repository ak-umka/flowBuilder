<template>
  <component :is="layout">
    <RouterView />
  </component>
</template>

<script setup>
import { RouterView } from "vue-router";

import { computed } from "vue";
import { useRouter } from "vue-router";
const defaultLayout = "default";
const { currentRoute } = useRouter();

const layout = computed(
  () => `${currentRoute.value.meta.layout || defaultLayout}-layout`
);
</script>
