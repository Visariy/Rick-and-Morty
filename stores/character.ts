import { defineStore } from "pinia";
import { ref, watch } from "vue";
import { AxiosError } from "axios";
import { ICharacter } from "~/interfaces/ICharacter";
import { ISearchData } from "~/interfaces/ISearchData";
import { IDataInfo } from "~/interfaces/IDataInfo";
import { ApiService } from "~/services/api";

export const useCharacterStore = defineStore("characterStore", () => {
  const isLoading = ref(false);
  const searchData = reactive<ISearchData>({
    name: "",
    status: "",
  });
  const characterList = ref<ICharacter[]>([]);
  const dataList = ref<IDataInfo>();

  const getCharacterByQueryCondition = async (searchData: ISearchData) => {
    try {
      const response = await ApiService.getCharacterByQueryCondition(
        searchData,
      );
      characterList.value = response.data.results;
      dataList.value = response.data.info;
    } catch (e) {
      const error = e as AxiosError;
      if(error.response?.status === 404) {
        characterList.value.length = 0;
      }
    }
  };

  const loadNextPage = async (next: string) => {
    try {
      const response = await ApiService.loadNextPage(next);
      characterList.value.push(...response.data.results);
      dataList.value = response.data.info;
    } catch(e) {
      console.log(e)
    }
  }

  watch(searchData, async () => {
    await getCharacterByQueryCondition(searchData);
  });

  return {
    getCharacterByQueryCondition,
    characterList,
    dataList,
    searchData,
    isLoading,
    loadNextPage
  };
});
