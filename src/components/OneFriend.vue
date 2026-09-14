<script setup lang="ts">

 import {ref} from "vue";

 interface Friend {
   id: string,
   name: string,
   phone: string,
   email: string,
   premium: boolean
 }

 const props = defineProps<{ friend: Friend, isShown?: boolean}>()
 const showDetail = ref(props.isShown)
 const emit = defineEmits<{'toggle-premium': [id: string]}>()

</script>

<template>
    <div
        class="card bg-base-100 shadow-md w-80"
        :class="props.friend.premium ? 'border-2 border-primary' : 'border border-base-300'"
    >
      <div class="card-body gap-2">
        <h2 class="card-title text-base">
          {{ props.friend.name }} - un ami: {{ props.friend.premium ? 'en Or' : 'en Plomb' }}
        </h2>

        <p :class="['badge', props.friend.premium ? 'badge-primary' : 'badge-secondary']">
          {{ props.friend.premium ? 'Premium' : 'Standard' }}
        </p>

        <div class="divider my-0"></div>
        <div v-if="showDetail">
          <p class="flex items-center gap-2 text-sm">
            <span class="badge badge-warning badge-sm">ID</span> {{ props.friend.id }}
          </p>
          <p class="flex items-center gap-2 text-sm">
            <span class="badge badge-info badge-sm">Tel</span> {{ props.friend.phone }}
          </p>
          <p class="flex items-center gap-2 text-sm">
            <span class="badge badge-error badge-sm">Email</span> {{ props.friend.email }}
          </p>
        </div>
        <button class="btn btn-secondary" @click="emit('toggle-premium', props.friend.id)">Update Premium</button>
        <button class="btn btn-primary" @click="showDetail = !showDetail">Afficher les détails</button>
      </div>
    </div>
</template>

<style scoped>

</style>