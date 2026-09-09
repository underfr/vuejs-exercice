<script setup lang="ts">
import { exerciceRoutes } from '../router/exercices'
</script>

<template>
  <div class="mx-auto max-w-3xl p-8">
    <h1 class="text-3xl font-bold">Exercices</h1>
    <ul class="menu bg-base-100 rounded-box mt-6 w-full shadow-sm">
      <li v-for="ex in exerciceRoutes" :key="ex.path">
        <RouterLink :to="ex.path">{{ ex.meta?.title }}</RouterLink>
      </li>
    </ul>
  </div>
</template>