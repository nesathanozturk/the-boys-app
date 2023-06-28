import Link from "next/link";
import Image from "next/image";
import CharacterDetail from "@/components/character-detail";
import { getCharacterDetail } from "@/api";
import { Params } from "@/types";
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
