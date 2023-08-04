<template>
  <div class="character-component-container">
    <div class="image-container">
      <img class="image" :src="character.image" alt="img" />
    </div>
    <div class="character-info">
      <div class="name">
        {{ character.name }}
      </div>
      <div class="species">
        {{ character.species }}
      </div>
      <div class="episodes">
        <ul class="episodes-list" v-for="episode of episodeList" :key="episode.id">
          <li class="episodes-list__item" @click="router.push(`/episode/${episode.id}`)">{{ episode.name }}</li>
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
import { useRouter } from "#vue-router"

const props = defineProps<{ character: ICharacter }>();

const episodeList = ref<IEpisode[]>([]);

const episodeStore = useEpisodeStore();

const router = useRouter();

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

<style scoped>
.character-component-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  .image-container {
    .image {
      width: 200px;
      border-radius: 10px;
    }
  }
  .character-info {
    .episodes {
      .episodes-list {
        .episodes-list__item {
          cursor: pointer;
        }
      }
    }
  }
}
</style>