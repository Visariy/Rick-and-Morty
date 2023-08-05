import { defineStore } from "pinia";
import { ApiService } from "~/services/api";
import { IEpisode } from "~/interfaces/IEpisode";

export const useEpisodeStore = defineStore("episodeStore", () => {
  const episodeInfo = ref<IEpisode>();

  const getEpisodeByUrl = async (url: string) => {
    try {
      const response = await ApiService.getEpisodeByUrl(url);
      episodeInfo.value = response.data;
    } catch (e) {
      console.log(e);
    }
  };

  const getEpisodeById = async (id: string) => {
    try {
      return await ApiService.getEpisodeById(id);
    } catch (e) {
      console.log(e);
    }
  };

  return { getEpisodeByUrl, getEpisodeById, episodeInfo };
});
