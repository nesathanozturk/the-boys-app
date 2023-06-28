import { getCharacters } from "@/api";
import CharacterCard from "@/components/character-card";
import "../styles/globals.css";

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
