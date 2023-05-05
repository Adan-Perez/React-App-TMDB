import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Spinner } from '../components/Spinner';
import { getMovieImg } from '../utils/getMovieImg';
import { get } from '../utils/httpClient';
import styles from './MovieDetails.module.css';

export function MovieDetails() {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    get('/movie/' + movieId).then((data) => {
      setMovie(data);
      setIsLoading(false);
    });
  }, [movieId]);

  if (isLoading) {
    return <Spinner />;
  }

  const imageUrl = getMovieImg(movie.poster_path, 500);
  return (
    <div className={styles.detailsContainer}>
      <img className={`${styles.col} ${styles.movieImage}`} src={imageUrl} alt={movie.title} />
      <div className={`${styles.col} ${styles.movieDetails}`}>
        <p className={styles.firstItem}>
          <strong>Title: </strong> {movie.title}
        </p>
        <p>
          <strong> Genres: </strong>
          {movie.genres.map((genre) => genre.name).join(', ')}
        </p>
        <p>
          <strong>Description:</strong> {movie.overview}
        </p>
        <p>
          <strong>Release date:</strong> {movie.release_date}
        </p>
        <p>
          <strong>Rating:</strong> {movie.vote_average}
        </p>
        <p>
          <strong>Runtime:</strong> {movie.runtime} minutes
        </p>
        <p>
          <strong> Video: </strong> {movie.video ? 'Yes' : 'No'}
        </p>
        <p>
          <strong> Adult: </strong> {movie.adult ? 'Yes' : 'No'}
        </p>
        <p>
          <strong> Original language: </strong> {movie.original_language}
        </p>
        <p>
          <strong> Production companies: </strong>
          {movie.production_companies.map((company) => company.name).join(', ')}
        </p>
        <p>
          <strong> Production countries: </strong>
          {movie.production_countries.map((country) => country.name).join(', ')}
        </p>
        <p>
          <strong> Spoken languages: </strong>
          {movie.spoken_languages.map((language) => language.name).join(', ')}
        </p>
      </div>
    </div>
  );
}
