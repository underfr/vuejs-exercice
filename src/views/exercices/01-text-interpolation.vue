<script setup lang="ts">

let unLivre: string = "Les mémoires de Steven Seagal"
let isOnline: boolean = true
let unNombre: number = 8888
let unTableau = ["du texte", 99]
let unObjet = { "name": "COOL", "tel": "060503030"}

const test = ()=>{
  return "Hello World"
}

let ternaire = isOnline ? unObjet.name : "Offline"

let html = '<h1>Du HTML</h1>'

</script>

<template>
  <div class="flex justify-center p-8">
    <div class="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 w-full max-w-2xl">
      <table class="table text-center">
        <thead>
        <tr>
          <th class="text-center">Variable</th>
          <th class="text-center">Valeur</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>unLivre</td>
          <td><span class="badge badge-primary">{{ unLivre }}</span></td>
        </tr>
        <tr>
          <td>isOnline</td>
          <td>{{ isOnline }}</td>
        </tr>
        <tr>
          <td>unNombre</td>
          <td><span class="badge badge-info">{{ unNombre }}</span></td>
        </tr>
        <tr>
          <td>unTableau</td>
          <td><span class="badge badge-success">{{ unTableau }}</span></td>
        </tr>
        <tr>
          <td>unTableau[0]</td>
          <td><span class="badge badge-success">{{ unTableau[0] }}</span></td>
        </tr>
        <tr>
          <td>unObjet</td>
          <td><span class="badge badge-warning">{{ unObjet }}</span></td>
        </tr>
        <tr>
          <td>unObjet.name</td>
          <td><span class="badge badge-warning">{{ unObjet.name }}</span></td>
        </tr>
        <tr>
          <td>unObjet['name']</td>
          <td><span class="badge badge-warning">{{ unObjet['name'] }}</span></td>
        </tr>
        <tr>
          <td>unObjet.tel</td>
          <td><span class="badge badge-warning">{{ unObjet.tel }}</span></td>
        </tr>
        <tr>
          <td>fonction test()</td>
          <td><span class="badge badge-error">{{ test() }}</span></td>
        </tr>
        <tr>
          <td>ternaire</td>
          <td><span class="badge badge-error">{{ ternaire }}</span></td>
        </tr>
        <tr>
          <td>html</td>
          <td><span class="badge badge-error">{{ html }}</span></td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>

</style>