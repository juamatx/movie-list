import Image from "next/image";
import { moveEmitHelpers } from "typescript";
import styles from "./page.module.css";
import Movie from "./select_movie"

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
       <Movie />
      </main>
    </div>
  );
}
