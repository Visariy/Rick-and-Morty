<template>
  <div v-if="episodeInfo" class="episode-container">
    <EpisodeCard :episode-info="episodeInfo" />
  </div>
  <div v-else>Идет загрузка</div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { onMounted } from "vue";
import { useEpisodeStore } from "~/stores/episode";
import { IEpisode } from "~/interfaces/IEpisode";

const episodeStore = useEpisodeStore();

const episodeInfo = ref<IEpisode>();

onMounted(async () => {
  const episodeId = route.params.id as string;
  const response = await episodeStore.getEpisodeById(episodeId);
  if (response) {
    episodeInfo.value = response.data;
  }
});

const route = useRoute();
</script>

<style lang="scss">
.episode-container {
    padding-bottom: 10%;
    padding-top: 10%;
    margin: 0 auto;
    max-width: 1000px;
}

</style>
