<script setup lang="ts">

 const props = defineProps({
   id: String,
   name: String,
   phone: String,
   email: String,
   premium: Boolean
 })

</script>

<template>
    <div
        class="card bg-base-100 shadow-md w-80"
        :class="props.premium ? 'border-2 border-primary' : 'border border-base-300'"
    >
      <div class="card-body gap-2">
        <h2 class="card-title text-base">
          {{ props.name }} - un ami: {{ props.premium ? 'en Or' : 'en Plomb' }}
        </h2>

        <p :class="['badge', props.premium ? 'badge-primary' : 'badge-secondary']">
          {{ props.premium ? 'Premium' : 'Standard' }}
        </p>

        <div class="divider my-0"></div>

        <p class="flex items-center gap-2 text-sm">
          <span class="badge badge-warning badge-sm">ID</span> {{ props.id }}
        </p>
        <p class="flex items-center gap-2 text-sm">
          <span class="badge badge-info badge-sm">Tel</span> {{ props.phone }}
        </p>
        <p class="flex items-center gap-2 text-sm">
          <span class="badge badge-error badge-sm">Email</span> {{ props.email }}
        </p>
      </div>
    </div>
</template>

<style scoped>

</style>