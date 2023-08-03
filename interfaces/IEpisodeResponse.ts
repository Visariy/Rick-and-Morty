import { IDataInfo } from "~/interfaces/IDataInfo";
import { IEpisode } from "~/interfaces/IEpisode";


export interface IEpisodeResponse {
    info: IDataInfo,
    results: IEpisode[],
}