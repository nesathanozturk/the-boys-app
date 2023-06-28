import CharacterDetail from "@/components/character-detail";
import { getCharacters, getCharacterDetail } from "@/api";
import { ICharacter, Params } from "@/types";
import { Metadata } from "next";
import styles from "./styles.module.css";

export async function generateMetadata({ params }: Params) {
  const data = await getCharacterDetail(params.id);

  return {
    title: data.name,
    description: data.real_name,
  };
}

async function Character({ params }: Params) {
  const id = params.id;

  const characterDetail = await getCharacterDetail(id);

  return (
    <main className={styles.main}>
      <CharacterDetail characterDetail={characterDetail} />
    </main>
  );
}

export default Character;

export async function generateStaticParams() {
  const data = await getCharacters();

  return data?.results?.map((character: ICharacter) => ({
    params: {
      id: character.id.toString(),
    },
  }));
}
