import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";
import { CharacterDetail } from "@/types";

const CharacterDetail: React.FC<CharacterDetail> = ({ characterDetail }) => {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.body}>
          <h1>Name: {characterDetail?.name}</h1>
          <h1>Full Name: {characterDetail?.real_name}</h1>
          <h1>Real Name: {characterDetail?.portrayed[0]}</h1>
          <h1>Citizenship: {characterDetail?.citizenship}</h1>
          <h1>Gender: {characterDetail?.gender}</h1>
          <h1>Status: {characterDetail?.status}</h1>
          <div className={styles.flex}>
            <span>{characterDetail?.species[0]},</span>&nbsp;
            <span>{characterDetail?.species[1]}</span>
          </div>
          <Link href="/" className={styles.link}>
            Back home
          </Link>
        </div>
        <div className={styles.image}>
          <Image
            src={characterDetail?.image}
            alt={characterDetail?.name}
            className={styles.img}
            width={200}
            height={300}
          />
        </div>
      </div>
    </>
  );
};

export default CharacterDetail;
