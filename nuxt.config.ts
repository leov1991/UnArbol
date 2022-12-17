// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  css: ['simplemde/dist/simplemde.min.css'],
  plugins: [{ src: '~plugins/simplemde.js', mode: 'client' }],
})
