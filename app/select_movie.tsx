import styles from "./page.module.css";
import data from "./movies.json";



export default async function Movie() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}></h1>
    </div>
  );
}
