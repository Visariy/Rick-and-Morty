<template>
  <div class="character-component-container">
    <div class="image-container">
      <img class="image" :src="character.image" alt="img" />
    </div>
    <div class="character-info">
      <div @click="router.push(`/character/${character.id}`)" class="name">
        Имя: {{ character.name }}
      </div>
      <div class="species">
        Вид: {{ character.species }}
      </div>
      <div class="episodes">
        Эпизоды:
        <ul
          v-for="episode of episodeList"
          :key="episode.id"
          class="episodes-list"
        >
          <li
            class="episodes-list__item"
            @click="router.push(`/episode/${episode.id}`)"
          >
            {{ episode.name }}
          </li>
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
import { useRouter } from "#vue-router";

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
  background: whitesmoke;
  border-radius: 10px;
  padding: 20px;
  margin: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  .image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    .image {
      padding-right: 20px;
      width: 250px;
      border-radius: 20px;
    }
  }
  .character-info {
    display: flex;
    flex-direction: column;
    gap: 10px;
    .name{
      cursor: pointer;
      font-size: 20px;
    }
    .species{
      font-size: 20px;
    }
    .episodes {
      .episodes-list {
        padding: 0;
        margin: 0;
        list-style-type: none;
        .episodes-list__item {
          margin: 0;
          font-size: 15px;
          padding-left: 10px;
          padding-top: 5px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
