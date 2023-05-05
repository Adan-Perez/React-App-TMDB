import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Spinner } from '../components/Spinner';
import { getMovieImg } from '../utils/getMovieImg';
import { get } from '../utils/httpClient';
import styles from './MovieDetails.module.css';

export function TvDetails() {
  const { tv_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [tv, setTv] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    get('/tv/' + tv_id).then((data) => {
      setTv(data);
      setIsLoading(false);
    });
  }, [tv_id]);

  if (isLoading) {
    return <Spinner />;
  }

  const imageUrl = getMovieImg(tv.poster_path, 500);
  return (
    <div className={styles.detailsContainer}>
      <img className={`${styles.col} ${styles.movieImage}`} src={imageUrl} alt={tv.title} />
      <div className={`${styles.col} ${styles.movieDetails}`}>
        <p className={styles.firstItem}>
          <strong> Title: </strong> {tv.name}
        </p>
        <p>
          <strong> Seasons: </strong> {tv.number_of_seasons}
        </p>
        <p>
          <strong>Description:</strong> {tv.overview}
        </p>
        <p>
          <strong> Genres: </strong>
          {tv.genres.map((genre) => genre.name).join(', ')}
        </p>
      </div>
    </div>
  );
}
