<script setup lang="ts">
import {ref} from "vue";

interface Friend {
  id: string,
  name: string,
  phone: string,
  email: string,
  premium: boolean
}

const emit = defineEmits<{'create-friend': [friend: Friend]}>()

const friendName = ref('')
const friendPhone = ref('')
const friendEmail = ref('')

function handleSubmit(){
  if (!friendName.value.trim()) return
  emit('create-friend', {
    id: crypto.randomUUID(),
    name: friendName.value,
    phone: friendPhone.value,
    email: friendEmail.value,
    premium: false
  })
  friendName.value = ''
  friendEmail.value = ''
  friendPhone.value = ''
}

</script>

<template>
  <div>
    <form class="card" @submit.prevent="handleSubmit">
      <h2 class="text-2xl">Ajouter un nouvel ami</h2>
      <label for="friendName">Nom</label>
      <input type="text" class="input" placeholder="Michel" id="friendName" v-model="friendName">
      <label for="friendPhone">Téléphone</label>
      <input type="text" class="input" placeholder="0612345678" id="friendPhone" v-model="friendPhone">
      <label for="friendEmail">Email</label>
      <input type="text" class="input" placeholder="michel@gmail.com" id="friendEmail" v-model="friendEmail">
      <button class="btn btn-primary w-80">Envoyer</button>
    </form>
  </div>
</template>

<style scoped>

</style>