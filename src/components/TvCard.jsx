import { Link } from 'react-router-dom';
import styles from './MovieCard.module.css';
import { getMovieImg } from '../utils/getMovieImg';

export function TvCard({ tv }) {
  const imageUrl = getMovieImg(tv.poster_path, 300);
  const tv_id = tv.id;
  return (
    <li className={styles.movieCard}>
      <Link to={'/tv/' + tv_id}>
        <img width={230} height={345} className={styles.movieImage} src={imageUrl} alt={tv.title} />
      </Link>
      <div>{tv.name}</div>
    </li>
  );
}
