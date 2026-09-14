<script setup lang="ts">
import { ref } from "vue";
import OneFriend from "../../components/OneFriend.vue";

interface friend {
  id: string,
  name: string,
  phone: string,
  email: string,
  premium: boolean
}

const lesAmis = ref<friend[]>([
  {
    id: 'lasticot',
    name: 'COCO L ASTICOT',
    phone: '01234 5678 991',
    email: 'coco@lasticot.com',
    premium: false
  },
  {
    id: 'lasticot2',
    name: 'COCO L ASTICOT',
    phone: '01234 5678 991',
    email: 'coco@lasticot.com',
    premium: true
  },
  {
    id: 'kimonoSurUnFrigo',
    name: "Steven Seagal",
    phone: '+338765477',
    email: 'steven@seagal.com',
    premium: true
  },
  {
    id: 'yoyoyo',
    name: "JAROD",
    phone: '+338765477',
    email: 'jAROD@seagal.com',
    premium: true
  },
  {
    id: 'yoyoyo',
    name: "JAROD",
    phone: '+338765477',
    email: 'jAROD@seagal.com',
    premium: true
  },
  {
    id: 'ok',
    name: "JAROD",
    phone: '+338765477',
    email: 'jAROD@seagal.com',
    premium: true
  },
  {
    id: 'GUS',
    name: "GussDX",
    phone: '+338765477',
    email: 'jAROD@seagal.com',
    premium: true
  }
]);
</script>

<template>
  <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
    <div v-for="friend in lesAmis" :key="friend.id">
      <OneFriend :id='friend.id' :name="friend.name" :phone="friend.phone" :email="friend.email" :premium="friend.premium"/>
    </div>
  </div>

</template>

<style scoped>

</style>