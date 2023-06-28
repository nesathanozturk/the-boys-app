import Image from "next/image";
import CharacterCard from "@/components/character-card";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { IData } from "@/types";
import "../styles/globals.css";

export const getCharacters = async (): Promise<IData> => {
  const res = await fetch("https://www.theboysapi.com/api/character");
  const data = await res.json();
  return data;
};

async function Home() {
  const data = await getCharacters();

  return (
    <main>
      <div className="container">
        {data?.results?.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </main>
  );
}

export default Home;
