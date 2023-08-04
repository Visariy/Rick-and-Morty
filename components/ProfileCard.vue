<template>
  <div class="profile-card-container">
    <div class="image-container">
      <img class="image" :src="character.image" alt="img" />
    </div>
    <div class="description">
      <div class="name">
       Name: {{ character.name }}
      </div>
      <div class="species">
       Specie: {{ character.species }}
      </div>
      <div class="location">
        Location: {{ character.location.name }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ICharacter } from "~/interfaces/ICharacter";

defineProps<{ character: ICharacter }>();
</script>

<style lang="scss">
.profile-card-container {
    background: white;
    border: 1px solid black;
    display: grid;
    grid-template-columns: repeat(2,1fr);
  .description {
    display: flex;
    max-width: 250px;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 20px;
    .name {
        font-size: 20px;
        font-family: 'Source Code Pro', monospace;
    }
    .species {
        font-size: 20px;
        font-family: 'Source Code Pro', monospace;
    }
    .location {
        font-size: 20px;
        font-family: 'Source Code Pro', monospace;
    }
  }

  .image-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
