<script setup lang="ts">

import {computed, ref, watch} from "vue";

const regexMail = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/i


const username = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const acceptTerms = ref(false)

const isUsernameValid = computed(()=> username.value.length >= 3)
const securityWarning = ref('')

const usernameError = computed(()=>{
  if(username.value.length !== 0 && !isUsernameValid.value){
    return 'Username incorrect'
  } else {
    return ''
  }
})

const isEmailValid = computed(()=> regexMail.test(email.value))

const emailError = computed(()=>{
  if(email.value.length !== 0 && !isEmailValid.value){
    return 'Email incorrect'
  } else {
    return ''
  }
})
const passwordRules = [
  { label: "Au moins 12 caractères", regex: /.{12,}/ },
  { label: "Une majuscule", regex: /[A-Z]/ },
  { label: "Une minuscule", regex: /[a-z]/ },
  { label: "Un chiffre", regex: /\d/ },
  {label: "Un caractère spécial", regex: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/}
]

const passwordChecks = computed(()=>{
  return passwordRules.map(rule => ({
    label: rule.label,
    valid: rule.regex.test(password.value)
  }))
})

const isPasswordMatch = computed(() => password.value === confirmPassword.value)

const confirmPasswordError = computed(() => {
  if(confirmPassword.value.length !== 0 && !isPasswordMatch.value){
    return 'Mot de passe incorrect'
  } else {
    return ''
  }
})

const score = computed(()=>{
  return passwordChecks.value.filter(check => check.valid ).length
})

const progressClass = computed(()=>{
  if (score.value <=2) return 'progress-error'
  if (score.value <=4) return 'progress-warning'
  return 'progress-success'
})

const isFormValid = computed(() => {
  return isUsernameValid.value
      && isEmailValid.value
      && score.value === 5
      && isPasswordMatch.value
      && acceptTerms.value
      && securityWarning.value === ''
})

function handleSubmit() {
  console.log({ username: username.value, email: email.value })
}

watch(username, (value)=>{
  const clean = value.replace(/[<&"'>]/g,'')
  if (clean !== value) username.value = clean
})
watch([username, email], () => {
  if (username.value.toLocaleLowerCase().includes('admin') || email.value.toLocaleLowerCase().includes('admin')){
    securityWarning.value = "Admin n'est pas autorisé"
  } else {
    securityWarning.value = ''
  }
})
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-base-200 p-4">
    <div class="card w-full max-w-md bg-base-100 shadow-xl">
      <div class="card-body">

        <h2 class="card-title justify-center text-2xl mb-2">Créer un compte</h2>

        <div v-if="securityWarning" role="alert" class="alert alert-warning mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <span>{{ securityWarning }}</span>
        </div>

        <form class="flex flex-col gap-3" @submit.prevent="handleSubmit">

          <div class="form-control">
            <label class="label" for="username">
              <span class="label-text">Nom d'utilisateur</span>
            </label>
            <input
                id="username"
                v-model="username"
                type="text"
                placeholder="votre pseudo"
                class="input input-bordered w-full"
                :class="{ 'input-error': usernameError }"
            >
            <p v-if="usernameError" class="text-error text-sm mt-1">{{ usernameError }}</p>
          </div>

          <div class="form-control">
            <label class="label" for="email">
              <span class="label-text">Adresse email</span>
            </label>
            <input
                id="email"
                v-model="email"
                type="email"
                placeholder="address@mail.com"
                class="input input-bordered w-full"
                :class="{ 'input-error': emailError }"
            >
            <p v-if="emailError" class="text-error text-sm mt-1">{{ emailError }}</p>
          </div>

          <div class="form-control">
            <label class="label" for="password">
              <span class="label-text">Mot de passe</span>
            </label>
            <input
                id="password"
                v-model="password"
                type="password"
                placeholder="*******"
                class="input input-bordered w-full"
            >

            <progress
                class="progress w-full mt-2"
                :class="progressClass"
                :value="score"
                max="5"
            ></progress>

            <ul class="mt-2 space-y-1">
              <li
                  v-for="check in passwordChecks"
                  :key="check.label"
                  class="flex items-center gap-2 text-sm"
                  :class="check.valid ? 'text-success' : 'text-base-content/50'"
              >
                <span class="font-bold">{{ check.valid ? '✓' : '○' }}</span>
                {{ check.label }}
              </li>
            </ul>
          </div>

          <div class="form-control">
            <label class="label" for="confirmPassword">
              <span class="label-text">Confirmer le mot de passe</span>
            </label>
            <input
                id="confirmPassword"
                v-model="confirmPassword"
                type="password"
                placeholder="*******"
                class="input input-bordered w-full"
                :class="{ 'input-error': confirmPasswordError }"
            >
            <p v-if="confirmPasswordError" class="text-error text-sm mt-1">
              {{ confirmPasswordError }}
            </p>
          </div>

          <div class="form-control mt-1">
            <label class="label cursor-pointer justify-start gap-3">
              <input type="checkbox" class="checkbox checkbox-primary" v-model="acceptTerms">
              <span class="label-text">J'accepte les conditions d'utilisation</span>
            </label>
          </div>

          <button type="submit" class="btn btn-primary mt-2" :disabled="!isFormValid">
            S'inscrire
          </button>

        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>