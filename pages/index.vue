<template>
  <div class="character-container">
    <div class="character-container__filters">
      <input class="input" v-model="characterStore.searchData.name" />
      <select class="select" v-model="characterStore.searchData.status">
        <option v-for="option in options" :key="option.id" :value="option.value">
          {{ option.text }}
        </option>
      </select>
    </div>
    <div class="character-container__list">
      <CharactersList />
    </div>
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

<style scoped lang="scss">
.character-container {
  margin: 0 auto;
  max-width: 1200px;
  &__filters{
    padding-top: 15%;
    display: flex;
    justify-content: center;
    .input{
      border-radius: 5px;
      border: none;
      color:red;
      margin-right: 10px;
      padding: 10px;
      width: 50%;
    }
    .select {
      border-radius: 5px;
      padding: 10px;
    }
  }
  &__list {
    padding-top: 10%;
  }
}
</style>
