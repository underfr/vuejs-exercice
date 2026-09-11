<script setup lang="ts">

import {computed, ref, watch} from "vue";

let leNombre = ref(0)
let message = ref('')
const increaseByOne = ()=>{
  leNombre.value += 1
}

const increaseByFive = ()=>{
  leNombre.value += 5
}

const indice = computed(()=>{
  if (leNombre.value == 0) {
    return ''
  }
  if (leNombre.value < 7){
    return "Essaie encore"
  }
  if (leNombre.value == 7) {
    return`${leNombre.value}... Bingo`
  }
  if (leNombre.value > 7) {
    return "Tu as dépassé le nombre !"
  }
  return ''
})

watch(leNombre, ()=>{
  if (leNombre.value > 30){
    message.value = "Beaucoup beaucoup mais alors beaucoup trop !"
    setTimeout(()=>{
      leNombre.value = 0
      message.value = ''
    }, 3000)
  }
})

</script>

<template>
  <div class="min-h-screen bg-base-200 flex items-center justify-center p-4">
    <div class="card w-full max-w-sm bg-base-100 shadow-xl">
      <div class="card-body items-center text-center gap-5">

        <div>
          <h2 class="card-title justify-center">Devine le nombre</h2>
        </div>

        <div class="stats bg-base-200">
          <div class="stat place-items-center py-4">
            <div
                class="stat-value tabular-nums transition-colors duration-200"
                :class="{ 'text-success': leNombre === 7, 'text-warning': leNombre > 7 }"
            >{{ leNombre }}</div>
          </div>
        </div>

        <div class="join">
          <button class="btn btn-primary join-item" @click="increaseByOne()">+1</button>
          <button class="btn btn-secondary join-item" @click="increaseByFive()">+5</button>
        </div>
        <div>
          <button class="btn btn-info" @click="leNombre = 0">Reset</button>
        </div>
        <div class="w-full min-h-16 flex items-center">
          <div v-if="message" role="alert" class="alert alert-error w-full">
            <span>{{ message }}</span>
          </div>

          <div
              v-else-if="indice"
              role="status"
              aria-live="polite"
              class="alert w-full"
              :class="{
              'alert-info': leNombre < 7 || leNombre > 7,
              'alert-success': leNombre === 7
            }"
          >
            <span>{{ indice }}</span>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>

</style>