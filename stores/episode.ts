import { defineStore } from "pinia";
import { ApiService } from "~/services/api";
import { IEpisode } from "~/interfaces/IEpisode";

export const useEpisodeStore = defineStore("episodeStore", () => {
  const episodeInfo = ref<IEpisode>();

  const getEpisode = async (url: string) => {
    try {
      const response = await ApiService.getEpisode(url);
      episodeInfo.value = response.data;
    } catch (e) {
      console.log(e);
    }
  };

  return { getEpisode, episodeInfo };
});
