<script setup lang="ts">
import { computed, onMounted, ref } from "vue";

const pokeList = ref<any[]>([])
const meteo = ref<any>(null)
const yugiohCard = ref<any[]>([])
const search = ref('')

const cartesFiltrees = computed(() => {
  const q = search.value.trim().toLowerCase()
  if (!q) return yugiohCard.value
  return yugiohCard.value.filter(c => c.name.toLowerCase().includes(q))
})

async function fetchPoke() {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/')
    const data = await response.json()
    pokeList.value = data.results
  } catch (err) {
    console.error(err)
  }
}

/*async function fetchMeteo(){
  try {
    const response = await fetch('https://prevision-meteo.ch/services/json/toulouse')
    const data = await response.json()
    meteo.value = data
  } catch (err){
    console.error(err)
  }
}*/

async function fetchYugioh() {
  try {
    const response = await fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php?num=10&offset=550")
    const data = await response.json()
    yugiohCard.value = data.data
  } catch (err) {
    console.error(err)
  }
}

onMounted(() => {
  fetchPoke()
  //fetchMeteo()
  fetchYugioh()
})
</script>

<template>
  <div class="p-4">
    <h2 class="text-primary text-2xl mb-4">Pokemon List</h2>
    <div class="flex flex-wrap gap-2">
      <span v-for="(p, i) in pokeList" :key="i" class="badge badge-secondary">{{ p.name }}</span>
    </div>
  </div>

  <div class="p-4" v-if="meteo">
    <!--<h2 class="text-primary text-2xl">Meteo {{ meteo.city_info.name }}</h2>
    <p>Température Max: {{ meteo.fcst_day_0.tmax }} °C</p>
    <p>Température Min: {{ meteo.fcst_day_0.tmin }} °C</p>
    <p>Température actuelle: {{ meteo.current_condition.tmp }} °C</p>
    <p>Condition: {{ meteo.current_condition.condition }}</p>-->
  </div>

  <div class="p-4">
    <h2 class="text-primary text-2xl mb-4">Yu Gi Oh !</h2>

    <div class="flex items-center gap-4 mb-4">
      <input
          v-model="search"
          type="text"
          placeholder="Rechercher une carte…"
          class="input input-bordered w-full max-w-xs"
      />
      <span class="text-sm opacity-60">
        {{ cartesFiltrees.length }} / {{ yugiohCard.length }} cartes
      </span>
    </div>

    <div v-if="!yugiohCard.length" class="flex justify-center py-10">
      <span class="loading loading-spinner loading-lg text-primary"></span>
    </div>

    <div v-else class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
      <div
          v-for="card in cartesFiltrees"
          :key="card.id"
          class="card bg-base-100 shadow-md hover:shadow-xl transition-shadow"
      >
        <figure>
          <img
              :src="card.card_images?.[0]?.image_url_small"
              :alt="card.name"
              loading="lazy"
          />
        </figure>

        <div class="card-body p-3 gap-2">
          <h2 class="card-title text-sm">{{ card.name }}</h2>

          <div class="flex flex-wrap gap-1">
            <span class="badge badge-sm badge-outline">{{ card.humanReadableCardType }}</span>
            <span v-if="card.attribute" class="badge badge-sm badge-primary">{{ card.attribute }}</span>
            <span v-if="card.archetype" class="badge badge-sm badge-ghost">{{ card.archetype }}</span>
          </div>

          <p v-if="card.atk != null" class="text-xs opacity-70">
            ATK {{ card.atk }} / DEF {{ card.def ?? '—' }}
            <span v-if="card.level">· Niv. {{ card.level }}</span>
          </p>

          <p class="text-xs opacity-60 line-clamp-3">{{ card.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>