import { ICharacter } from "~/interfaces/ICharacter";
import { IDataInfo } from "~/interfaces/IDataInfo";

export interface ICharacterResponse {
  info: IDataInfo;
  results: ICharacter[];
}
