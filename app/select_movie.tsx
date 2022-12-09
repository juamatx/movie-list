import styles from "./page.module.css";
import data from "./movies.json";

async function getMovie() {
  const res = await fetch(
    "https://y23xzzq934.execute-api.us-east-1.amazonaws.com/Prod/movie-of-the-week"
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Movie() {
  const movie = await getMovie();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{movie}</h1>
    </div>
  );
}
