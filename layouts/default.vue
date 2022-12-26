<!-- layouts/default.vue -->
<template>
  <div>
    <header class="shadow-sm bg-green-700">
      <nav class="container mx-auto p-4 flex justify-between">
        <NuxtLink to="/" class="font-bold text-white">INICIO</NuxtLink>
        <div>
        <NuxtLink v-if="user" to="/posts/new" class="text-white font-semibold">Crear Post</NuxtLink>
        <button
            v-if="user"
            @click="client.auth.signOut()"
            class="px-3 py-1 text-md font-medium shadow-sm rounded bg-red-600 text-white mx-5"
          >
            Salir
          </button>
        </div>
      </nav>
    </header>
    <div class="container mx-auto p-4">
        <slot />
      </div>
  </div>
</template>

<script setup lang="ts">
const user = useSupabaseUser()
const client = useSupabaseAuthClient()
</script>



