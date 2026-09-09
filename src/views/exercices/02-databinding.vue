<script setup lang="ts">

import {ref} from "vue";

const luckyNumber = ()=>{
  return (Math.random() * 100).toFixed(0)
}


const user = ref({
  "name": "Dr. Mario",
  "picture": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf-g6h0Cby6BYOpLIsfIk8l9xt3MgGBlb_NCAlKaHugw&s=10",
  "age": 30,
  "nb": luckyNumber()
})
const agePlusTen = ()=>{
  return user.value.age + 10
}

</script>

<template>
  <div class="flex flex-col items-center gap-6 p-8">
    <h1 class="text-3xl text-center">TP: Binding</h1>

    <div class="card bg-base-100 w-96 shadow-sm">
      <figure class="px-10 pt-10">
        <img
            :src="user.picture"
            :alt="`Photo de ${user.name}`"
            class="rounded-3xl"
        />
      </figure>

      <div class="card-body items-center text-center">
        <h2 class="card-title">{{ user.name }}</h2>

        <input
            type="text"
            v-model="user.name"
            :maxlength="30"
            class="input"
        />

        <p>
          Age:
          <span class="badge" :class="user.age >= 18 ? 'badge-primary' : 'badge-warning'">
            {{ user.age }} ans
          </span>
        </p>

        <p>Age + 10: <span class="badge badge-secondary">{{ agePlusTen() }} ans</span></p>

        <p>
          Lucky Number:
          <span class="badge badge-success" :title="`Le chiffre porte-bonheur de ${user.name}`">
            {{ user.nb }}
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>