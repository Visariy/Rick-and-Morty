<template>
  <div class="character-component-container">
    <div class="image-container">
      <img class="image" :src="character.image" alt="img" />
    </div>
    <div class="character-info">
      <NuxtLink style="text-decoration: none; color: black" :to="`/character/${character.id}`" >
        <div class="name">
          {{ character.name }}
        </div>
      </NuxtLink>
      <div class="species">{{ character.species }}</div>
      <div class="status">
        <div
          :style="[{ background: statusIndicator(character.status) }]"
          class="status__indicator"
        ></div>
        <div class="status__text">
          {{ character.status }}
        </div>
      </div>
      <div class="episodes">
        <span class="episodes__title">Episode:</span>
        <ul
          v-for="episode of episodeList"
          :key="episode.id"
          class="episodes-list"
        >
        <NuxtLink style="text-decoration: none; color: black" :to="`/episode/${episode.id}`">
          <li
            class="episodes-list__item"
          >
            {{ episode.name }}
          </li>
        </NuxtLink>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { ICharacter } from "~/interfaces/ICharacter";
import { IEpisode } from "~/interfaces/IEpisode";
import { useEpisodeStore } from "~/stores/episode";

const props = defineProps<{ character: ICharacter }>();

const episodeList = ref<IEpisode[]>([]);

const episodeStore = useEpisodeStore();

const statusIndicator = (status: string): string => {
  switch (status) {
    case "Dead":
      return "red";
    case "Alive":
      return "green";
    case "Unknown":
      return "grey";
  }
  return "grey";
};

onMounted(async () => {
  for (let i = 0; i < props.character.episode.length; i++) {
    const episodeUrl = props.character.episode[i];
    await episodeStore.getEpisode(episodeUrl);
    if (episodeList.value.length <= 5) {
      if (episodeStore.episodeInfo) {
        episodeList.value.push(episodeStore.episodeInfo);
      }
    }
  }
});
</script>

<style scoped lang="scss">
.character-component-container {
  background: whitesmoke;
  border-radius: 10px;
  border: 1px solid black;
  margin: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  .image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    .image {
      padding-right: 20px;
    }
  }
  .character-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;

    .status {
      display: flex;
      align-items: center;
      gap: 10px;
      &__indicator {
        border: 1px solid black;
        width: 10px;
        border-radius: 5px;
        height: 10px;
        background: red;
      }
      &__text {
        font-family: 'Source Code Pro', monospace;
      }
    }
    .name {
      font-family: 'Source Code Pro', monospace;
      cursor: pointer;
      font-size: 20px;
      &:hover {
        color:blue;
      }
    }
    .species {
      font-family: 'Source Code Pro', monospace;
      font-size: 20px;
    }
    .episodes {
      &__title {
        font-family: 'Source Code Pro', monospace;
      }
      .episodes-list {
        padding: 0;
        margin: 0;
        list-style-type: none;
        .episodes-list__item {
          font-family: 'Source Code Pro', monospace;
          margin: 0;
          font-size: 15px;
          padding-left: 10px;
          padding-top: 5px;
          cursor: pointer;
          &:hover {
            color: blue;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 562px) {
  .character-component-container{
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(2, 1fr);
    .character-info {
      align-items: center;
    }
  }
}
</style>
