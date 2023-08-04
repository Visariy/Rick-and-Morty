<template>
  <NuxtPageTransition name="fade" mode="out-in">
    <RouterView></RouterView>
  </NuxtPageTransition>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useCharacterStore } from "~/stores/character";

const characterStore = useCharacterStore();

onMounted(async () => {
  await characterStore.getCharacterByQueryCondition(characterStore.searchData);
});
</script>

<style lang="scss">
@use "~/assets/scss/main.scss";
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
