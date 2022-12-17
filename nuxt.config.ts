// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  css: ['simplemde/dist/simplemde.min.css'],
  plugins: [
    { src: '~plugins/client.js' },
    { src: '~plugins/simplemde.js', mode: 'client' },
  ],

  runtimeConfig :{
    supabaseURL : process.env.SUPABASE_URL,
    supabaseApiKey: process.env.SUPABASE_API_KEY

  }
})
