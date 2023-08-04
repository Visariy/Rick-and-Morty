<template>
  <div v-if="character" class="profile-container">
    <ProfileCard :character="character" />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import { useCharacterStore } from "~/stores/character";
import { ICharacter } from "~/interfaces/ICharacter";

const route = useRoute();

const character = ref<ICharacter>();

const characterStore = useCharacterStore();

onMounted(async () => {
  const characterId = route.params.id as string;
  const response = await characterStore.getCharacterById(characterId);
  if (response) {
    character.value = response.data;
  }
});
</script>

<style lang="scss">
    .profile-container {
        padding-top: 10%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
