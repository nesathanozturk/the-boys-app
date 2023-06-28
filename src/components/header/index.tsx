import Image from "next/image";
import styles from "./styles.module.css";
import theboys from "../../../public/the-boys.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <Image
        src={theboys}
        alt="The Boys Logo"
        width={350}
        height={150}
        className={styles.image}
      />
    </header>
  );
};

export default Header;
