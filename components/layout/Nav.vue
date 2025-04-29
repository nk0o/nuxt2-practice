<template>
  <nav aria-label="Global" class="hidden md:block">
    <ul class="flex items-center gap-6 text-sm">
      <li>
        <NuxtLink
          to="/event/eventA"
          class="text-gray-500 transition hover:text-gray-500/75"
          >Event A</NuxtLink
        >
      </li>

      <li>
        <NuxtLink
          to="/event/eventB"
          class="text-gray-500 transition hover:text-gray-500/75"
          >Event B</NuxtLink
        >
      </li>

      <li>
        <NuxtLink
          to="/event/eventC"
          class="text-gray-500 transition hover:text-gray-500/75"
          >Event C</NuxtLink
        >
      </li>

      <li>
        <NuxtLink
          to="/product"
          class="text-gray-500 transition hover:text-gray-500/75"
          >Products</NuxtLink
        >
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts"></script>

<style scoped></style>
