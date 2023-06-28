import { IData, ICharacter } from "@/types";

export const getCharacters = async (): Promise<IData> => {
  const res = await fetch("https://www.theboysapi.com/api/character");
  const data = await res.json();
  return data;
};

export const getCharacterDetail = async (id: number): Promise<ICharacter> => {
  const res = await fetch(`https://www.theboysapi.com/api/character/${id}`);
  const data = await res.json();
  return data;
};
