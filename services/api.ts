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
    return await api.get(
      `/character/?name=${searchData.name}&status=${searchData.status}`,
    );
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
