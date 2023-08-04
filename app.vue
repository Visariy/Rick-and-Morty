<template>
  <RouterView></RouterView>
</template>

<script setup lang="ts">
import { useCharacterStore } from "~/stores/character";

const characterStore = useCharacterStore();

onMounted(async () => {
  await characterStore.getCharacterByQueryCondition(characterStore.searchData);
});
</script>

<style lang="scss">
@use "~/assets/scss/main.scss";
</style>
