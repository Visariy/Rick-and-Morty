export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiBase: "https://rickandmortyapi.com/api",
    },
  },
});
