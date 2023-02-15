<template>
  <div>
    <form class="flex flex-col gap-2" @submit.prevent="login()">
      <input
        type="email"
        placeholder="Email"
        v-model="email"
        class="p-2 bg-gray-600 rounded text-gray-300"
      />
      <input
        type="password"
        placeholder="Contraseña"
        v-model="password"
        class="p-2 bg-gray-600 rounded text-gray-300"
      />
      <button
        type="submit"
        class="p-2 font-medium text-white bg-green-500 rounded hover:bg-green-400"
      >
        <span> Log in </span>
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ['auth'],
})
const email = ref('')
const password = ref('')
const client = useSupabaseAuthClient()

const login = async () => {
  const { data, error } = await client.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  })
}

const user = useSupabaseUser()
onMounted(() => {
  watchEffect(() => {
    if (user.value) {
      navigateTo('/')
    }
  })
})
</script>

<style scoped></style>
