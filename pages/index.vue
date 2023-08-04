<template>
  <div class="character-container">
    <input v-model="characterStore.searchData.name" />
    <select v-model="characterStore.searchData.status">
      <option v-for="option in options" :key="option.id" :value="option.value">
        {{ option.text }}
      </option>
    </select>
    <CharactersList />
  </div>
</template>

<script setup lang="ts">
import { useCharacterStore } from "~/stores/character";

const options = ref([
  { id: 1, text: "Alive", value: "Alive" },
  { id: 2, text: "Dead", value: "Dead" },
  { id: 3, text: "Unknown", value: "Unknown" },
  { id: 4, text: "Default", value: "" },
]);
const characterStore = useCharacterStore();
</script>

<style></style>
