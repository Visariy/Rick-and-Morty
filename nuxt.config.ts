export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "@pinia-plugin-persistedstate/nuxt"],
  build: {
    transpile: ["~/interfaces", "~/services"],
  },
});
