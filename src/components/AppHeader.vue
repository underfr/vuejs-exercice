<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { exerciceRoutes } from '../router/exercices'
import {tpRoutes} from "../router/tp.ts";

const search = ref('')
const route = useRoute()

const links = [
  { label: 'Accueil', to: '/' },
  { label: 'Contact', to: '/contact' },
  { label: 'About', to: '/about' },
]

// ferme dropdowns et sous-menus à chaque changement de page
watch(
    () => route.fullPath,
    () => {
      document
          .querySelectorAll<HTMLDetailsElement>('.navbar details[open]')
          .forEach((d) => d.removeAttribute('open'))
      ;(document.activeElement as HTMLElement | null)?.blur()
    },
)
</script>

<template>
  <div class="navbar bg-base-100 shadow-sm">
    <div class="navbar-start">
      <!-- menu mobile -->
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none"
               viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>
        <ul tabindex="0"
            class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-56 p-2 shadow">
          <li v-for="link in links" :key="link.to">
            <RouterLink :to="link.to" active-class="menu-active">
              {{ link.label }}
            </RouterLink>
          </li>
          <li>
            <details>
              <summary>TP</summary>
              <ul class="max-h-72 overflow-y-auto">
                <li>
                  <RouterLink to="/tp" exact-active-class="menu-active">
                    Tous les TP
                  </RouterLink>
                </li>
                <li v-for="tp in tpRoutes" :key="tp.path">
                  <RouterLink :to="tp.path" active-class="menu-active">
                    {{ tp.meta?.title }}
                  </RouterLink>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>Exercices</summary>
              <ul class="max-h-72 overflow-y-auto">
                <li>
                  <RouterLink to="/ex" exact-active-class="menu-active">
                    Tous les exercices
                  </RouterLink>
                </li>
                <li v-for="ex in exerciceRoutes" :key="ex.path">
                  <RouterLink :to="ex.path" active-class="menu-active">
                    {{ ex.meta?.title }}
                  </RouterLink>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>

      <RouterLink to="/" class="btn btn-ghost text-xl">daisyUI</RouterLink>
    </div>

    <!-- menu desktop -->
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li v-for="link in links" :key="link.to">
          <RouterLink :to="link.to" active-class="menu-active">
            {{ link.label }}
          </RouterLink>
        </li>

        <li>
          <details>
            <summary :class="{ 'menu-active': route.path.startsWith('/tp') }">
              TP
            </summary>
            <ul class="bg-base-100 rounded-t-none z-1 w-56 p-2 shadow max-h-96 overflow-y-auto">
              <li>
                <RouterLink to="/tp" exact-active-class="menu-active">
                  Tous les TP
                </RouterLink>
              </li>
              <li v-for="tp in tpRoutes" :key="tp.path">
                <RouterLink :to="tp.path" active-class="menu-active">
                  {{ tp.meta?.title }}
                </RouterLink>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <details>
            <summary :class="{ 'menu-active': route.path.startsWith('/ex') }">
              Exercices
            </summary>
            <ul class="bg-base-100 rounded-t-none z-1 w-56 p-2 shadow max-h-96 overflow-y-auto">
              <li>
                <RouterLink to="/ex" exact-active-class="menu-active">
                  Tous les exercices
                </RouterLink>
              </li>
              <li v-for="ex in exerciceRoutes" :key="ex.path">
                <RouterLink :to="ex.path" active-class="menu-active">
                  {{ ex.meta?.title }}
                </RouterLink>
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </div>

    <div class="navbar-end gap-2">
      <input v-model="search" type="text" placeholder="Search" class="input w-24 md:w-auto" />

      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <img alt="Avatar"
                 src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <ul tabindex="0"
            class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
          <li>
            <RouterLink to="/profil" class="justify-between" active-class="menu-active">
              Profile
              <span class="badge">New</span>
            </RouterLink>
          </li>
          <li><RouterLink to="/parametres" active-class="menu-active">Settings</RouterLink></li>
          <li><button>Logout</button></li>
        </ul>
      </div>
    </div>
  </div>
</template>