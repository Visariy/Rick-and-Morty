import axios, { AxiosResponse } from "axios";
import { ICharacterResponse } from "~/interfaces/ICharacterResponse";
import { ISearchData } from "~/interfaces/ISearchData";
import { IEpisode } from "~/interfaces/IEpisode";
import { ICharacter } from "~/interfaces/ICharacter";

const api = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
});

export class ApiService {
  public static getCharacterByQueryCondition = async (
    searchData: ISearchData,
  ): Promise<AxiosResponse<ICharacterResponse>> => {
    
    const params: any = {}

    if (searchData.name) params.name = searchData.name;
	  if (searchData.status) params.status = searchData.status;

	  return await axios.get(`https://rickandmortyapi.com/api/character`, {
		  params: params,
	  });
  };

  public static getCharacterByUrl = async (
    url: string,
  ): Promise<AxiosResponse<ICharacter>> => {
    return await api.get(
      `${url}`,
    );
  };

  public static getCharacterById = async (
    id: string,
  ): Promise<AxiosResponse<ICharacter>> => {
    return await api.get(
      `character/${id}`,
    );
  };

  public static getEpisode = async (
    url: string,
  ): Promise<AxiosResponse<IEpisode>> => {
    return await api.get(`${url}`);
  };

  public static getEpisodeById = async (
    id: string,
  ): Promise<AxiosResponse<IEpisode>> => {
    return await api.get(`/episode/${id}`);
  };

  public static loadNextPage = async (
    next: string,
  ): Promise<AxiosResponse<ICharacterResponse>> => {
    return await api.get(next);
  };
}
