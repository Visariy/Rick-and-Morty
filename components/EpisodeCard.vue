<template>
  <div class="episode-card-container">
    <div class="description">
      <h1 class="description__title">
        {{ episodeInfo.name }}
      </h1>
      <h4 class="description__date">
        {{ episodeInfo.air_date }}
      </h4>
    </div>
    <div class="characters">
      <div
        v-for="character in episodeCharacters"
        :key="character.id"
        class="image-container"
      >
        <NuxtLink :to="`/character/${character.id}`">
          <img class="image" :src="character.image" alt="img" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ICharacter } from "interfaces/ICharacter";
import { IEpisode } from "~/interfaces/IEpisode";
import { useCharacterStore } from "~/stores/character";

const episodeCharacters = ref<ICharacter[]>([]);

const characterStore = useCharacterStore();

const props = defineProps<{ episodeInfo: IEpisode }>();

onMounted(async () => {
  for await (const character of props.episodeInfo.characters) {
    const response = await characterStore.getCharacterByUrl(character);
    if (response) {
      episodeCharacters.value.push(response.data);
    }
  }
});
</script>

<style scoped lang="scss">
.episode-card-container {
  border: 1px solid grey;
  border-radius: 10px;
  .description {
    align-items: center;
    flex-direction: column;
    display: flex;
    gap: 50px;
    padding-bottom: 50px;
    padding-top: 50px;
    &__title {
      text-align: center;
      font-family: "Source Code Pro", monospace;
    }
    &__date {
      font-family: "Source Code Pro", monospace;
    }
  }
  .characters {
    justify-items: center;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    .image-container {
      .image {
        width: 150px;
      }
    }
  }
}

@media screen and (max-width: 900px) {
  .characters {
    grid-template-columns: repeat(5, 1fr) !important;
  }
}
@media screen and (max-width: 750px) {
  .characters {
    grid-template-columns: repeat(4, 1fr) !important;
  }
}
@media screen and (max-width: 600px) {
  .characters {
    grid-template-columns: repeat(3, 1fr) !important;
  }
}
@media screen and (max-width: 470px) {
  .characters {
    grid-template-columns: repeat(2, 1fr) !important;
  }
}
</style>
