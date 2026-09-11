<script setup lang="ts">
import {tpRoutes} from "../router/tp.ts";
</script>

<template>
  <div class="mx-auto max-w-3xl p-8">
    <h1 class="text-3xl font-bold">TP</h1>
    <ul class="menu bg-base-100 rounded-box mt-6 w-full shadow-sm">
      <li v-for="tp in tpRoutes" :key="tp.path">
        <RouterLink :to="tp.path">{{ tp.meta?.title }}</RouterLink>
      </li>
    </ul>
  </div>
</template>