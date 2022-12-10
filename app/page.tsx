import styles from "./page.module.css";

async function getMovie() {
  const res = await fetch( "https://y23xzzq934.execute-api.us-east-1.amazonaws.com/Prod/movie-of-the-week");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
export default async function Home() {
  const movie = await getMovie();

  return (
    <div className={styles.container}>
      <main className={styles.main}>
       <h1 className={styles.title}>{movie}</h1>
      </main>
    </div>
  );
}
