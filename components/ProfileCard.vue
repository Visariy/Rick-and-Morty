<template>
  <div class="profile-card-container">
    <div class="image-container">
      <img class="image" :src="character.image" alt="img" />
    </div>
    <div class="description">
      <div class="name">
       Имя: {{ character.name }}
      </div>
      <div class="species">
       Вид: {{ character.species }}
      </div>
      <div class="location">
        Локация: {{ character.location.name }}
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
    display: grid;
    grid-template-columns: repeat(2,1fr);
    border-radius: 20px;
  .description {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 20px;
    .name {
        
    }
    .species {
    }
    .location {
    }
  }

  .image-container {
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    .image {
      width: 250px;
      border-radius: 50px;
    }
  }
}
</style>
