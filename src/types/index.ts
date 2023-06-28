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

export interface Character {
  character: ICharacter;
}

export interface CharacterDetail {
  characterDetail: ICharacter;
}

export interface CharactersProps {
  characters: ICharacter[];
}
