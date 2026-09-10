<script setup lang="ts">
import { ref } from "vue";

const style1 = ref("blue");
const style2 = ref("pink");
const style3IsActive = ref(false);
const style4IsActive = ref(false);

function changeColor1() {
  style1.value = style1.value === "blue" ? "red" : "blue";
}

function changeColor2() {
  style2.value = style2.value === "pink" ? "green" : "pink";
}
</script>

<template>
  <div class="flex min-h-screen items-center justify-center bg-base-200 p-4">
    <div class="card w-full max-w-md bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">Toggle de styles</h2>
        <div class="divider my-1"></div>

        <div class="flex flex-col gap-3">
          <button
              class="btn border-none text-white"
              :style="{ backgroundColor: style1 }"
              @click="changeColor1"
          >
            Carte 1 via style
          </button>

          <button
              class="btn border-none text-white"
              :style="{ backgroundColor: style2 }"
              @click="changeColor2"
          >
            Carte 2 via style
          </button>

          <button
              class="btn"
              :class="style3IsActive ? 'btn-success' : 'btn-primary'"
              @click="style3IsActive = !style3IsActive"
          >
            Carte 3 via class
          </button>

          <button
              class="btn"
              :class="style4IsActive ? 'btn-warning' : 'btn-secondary'"
              @click="style4IsActive = !style4IsActive"
          >
            Carte 4 via class
          </button>
        </div>
      </div>
    </div>
  </div>
</template>