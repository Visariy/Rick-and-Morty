import axios, { AxiosResponse } from "axios";
import { ICharacterResponse } from "~/interfaces/ICharacterResponse";
import { ISearchData } from "~/interfaces/ISearchData";
import { IEpisode } from "~/interfaces/IEpisode";

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

  public static getEpisode = async (
    url: string,
  ): Promise<AxiosResponse<IEpisode>> => {
    return await api.get(`${url}`);
  };

  public static loadNextPage = async (
    next: string,
  ): Promise<AxiosResponse<ICharacterResponse>> => {
    return await api.get(next);
  };
}
