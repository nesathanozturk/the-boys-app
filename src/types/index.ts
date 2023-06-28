export interface ICharacter {
  id: number;
  name: string;
  real_name: string;
  portrayed: string;
  citizenship: string;
  gender: string;
  status: string;
  species: string;
  image: string;
}

export interface IData {
  results: ICharacter[];
  character: ICharacter[];
}

export interface ICharacterProps {
  character: ICharacter;
}

export interface ICharacterDetailProps {
  characterDetail: ICharacter;
}

export interface Params {
  params: { id: number };
}
