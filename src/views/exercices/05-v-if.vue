<script setup lang="ts">
import { ref } from "vue";

const movieList = ref<string[]>([]);
const movie = ref("");

function addMovie() {
  const title = movie.value.trim();
  if (!title) return;
  movieList.value.push(title);
  movie.value = "";
}

function removeMovie(index: number) {
  movieList.value.splice(index, 1);
}
</script>

<template>
  <div class="min-h-screen bg-base-200 flex items-center justify-center p-4">
    <div class="card w-full max-w-md bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title justify-between">
          WatchList
          <span class="badge badge-primary badge-lg">{{ movieList.length }}</span>
        </h2>
        <p class="text-sm opacity-60">Les films à voir</p>

        <div class="join w-full mt-4">
          <input
              type="text"
              id="movie"
              class="input input-bordered join-item w-full"
              placeholder="Nom du film…"
              v-model="movie"
              @keyup.enter="addMovie"
          >
          <button class="btn btn-primary join-item mt-3" @click="addMovie">
            Ajouter
          </button>
        </div>

        <div v-if="movieList.length === 0" class="text-center py-8 opacity-50">
          <p>Aucun film dans votre liste</p>
        </div>

        <ul v-else class="mt-4 divide-y divide-base-300">
          <li
              v-for="(film, i) in movieList"
              :key="i"
              class="flex items-center justify-between gap-2 py-3 badge badge-primary"
          >
            <span class="truncate cursor-pointer mb-5" @click="removeMovie(i)">{{i+1}} - {{ film }} - x</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>