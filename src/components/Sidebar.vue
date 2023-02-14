<template>
  <div class="flex">
    <div
      class="fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 transform bg-gray-900 lg:translate-x-0 lg:static lg:inset-0"
    >
      <div class="flex items-center justify-center mt-8">
        <router-link to="/">
          <div class="flex items-center">
            <svg
              class="w-8 h-8 ml-2 text-blue-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
              ></path>
            </svg>

            <span class="mx-2 text-2xl font-semibold text-white">VueBoard</span>
          </div>
        </router-link>
      </div>

      <nav class="mt-10">
        <aside>
          <div class="grid justify-items-center">
            <div
              class="w-40 align-middle bg-sky-500 hover:bg-sky-700 text-center text-white py-2 px-4 rounded-full"
              :draggable="true"
              @dragstart="onDragStart($event, 'input')"
            >
              Input Node
            </div>

            <div
              class="w-40 align-middle bg-sky-500 hover:bg-sky-700 text-center my-2 text-white py-2 px-4 rounded-full"
              :draggable="true"
              @dragstart="onDragStart($event, 'default')"
            >
              Default Node
            </div>

            <div
              class="w-40 align-middle bg-sky-500 hover:bg-sky-700 text-center text-white py-2 px-4 rounded-full"
              :draggable="true"
              @dragstart="onDragStart($event, 'output')"
            >
              Output Node
            </div>
          </div>
        </aside>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const onDragStart = (event, type) => {
  event.dataTransfer.setData("application/vueflow", type);
  event.dataTransfer.effectAllowed = "move";
};
</script>
