import Link from "next/link";
import styles from "./styles.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        Made with ❤️ by{" "}
        <Link
          href="https://www.github.com/nesathanozturk"
          className={styles.link}
        >
          Neşathan Öztürk
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
