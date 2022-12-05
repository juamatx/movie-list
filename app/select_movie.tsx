import styles from "./page.module.css";
import data from "./movies.json";

function randomMovie(movies:any){
  const moviesArray = Object.keys(movies).map((key) => movies[key]);
  const randomMovie = moviesArray[Math.floor(Math.random() * moviesArray.length)];
  return randomMovie;

}

export default function Movie() {
  console.log(data);
  const movie = randomMovie(data);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{movie.title}</h1>
    </div>
  );
}
