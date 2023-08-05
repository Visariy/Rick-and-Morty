import { defineStore } from "pinia";
import { ApiService } from "~/services/api";
import { IEpisode } from "~/interfaces/IEpisode";

export const useEpisodeStore = defineStore("episodeStore", () => {
  const episodeInfo = ref<IEpisode>();
  const isLoading = ref(false);  

  const getEpisodeByUrl = async (url: string) => {
    try {
      isLoading.value = true  
      const response = await ApiService.getEpisodeByUrl(url);
      episodeInfo.value = response.data;
      isLoading.value = false
    } catch (e) {
      console.log(e);
    }
  };

  const getEpisodeById = async (id: string) => {
    try {
        isLoading.value = true  
        return await ApiService.getEpisodeById(id)
        isLoading.value = false
    } catch (e) {
        console.log(e)
    }
  }

  return { getEpisodeByUrl, getEpisodeById, episodeInfo, isLoading };
});
