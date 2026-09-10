<script setup lang="ts">
import { ref } from "vue";


let nb = ref<number>(0)
const increase = ()=>{
  return nb.value = nb.value + 100
}
const decrease = ()=>{
  const newNb = nb.value - 55
  nb.value = newNb < 0 ? 0 : newNb
}

</script>

<template>
  <div class="card bg-base-100 shadow-xl w-fit">
    <div class="card-body items-center gap-4">
      <h2 class="card-title">Compteur</h2>
      <div class="flex items-center gap-4">
        <button class="btn btn-circle btn-outline" @click.right.prevent="decrease()">-</button>
        <p class="text-4xl font-bold tabular-nums w-16 text-center">{{ nb }}</p>
        <button class="btn btn-circle btn-primary" @click="increase()">+</button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>