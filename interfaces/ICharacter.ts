type originType = {
  name: string;
  url: string;
};

type locationType = {
  name: string;
  url: string;
};

export interface ICharacter {
  created: string;
  episode: string[];
  gender: string;
  id: number;
  image: string;
  location: locationType;
  name: string;
  origin: originType;
  species: string;
  status: string;
  type?: string;
  url: string;
}
