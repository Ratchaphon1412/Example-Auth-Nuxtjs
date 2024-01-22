// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css:['~/assets/css/app.css'],
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt"
  ],
  runtimeConfig: {
    // The private keys which are only available within server-side
    
    // Keys within public, will be also exposed to the client-side
    public: {
      apiBaseUrl: 'http://localhost/api/'
    }
  }
})