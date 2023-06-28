import Link from "next/link";
import Image from "next/image";
import CharacterDetail from "@/components/character-detail";
import { ICharacter, Params } from "@/types";
import styles from "./styles.module.css";
import { Metadata } from "next";

const getCharacterDetail = async (id: number): Promise<ICharacter> => {
  const res = await fetch(`https://www.theboysapi.com/api/character/${id}`);
  const data = await res.json();
  return data;
};

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
