import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css";
import { Character } from "@/types";

const CharacterCard: React.FC<Character> = ({ character }) => {
  return (
    <div key={character?.id} className={styles.card}>
      <div className={styles.box}>
        <Image
          src={character?.image}
          alt={character?.name}
          className={styles.image}
          width={100}
          height={100}
        />
        <div className={styles.overlay}>
          <Link href={`character/${character?.id}`} className={styles.link}>
            See details
          </Link>
        </div>
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{character?.name}</h3>
        <p className={styles.altTitle}>{character?.portrayed[0]}</p>
      </div>
    </div>
  );
};

export default CharacterCard;
