import styles from './App.module.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { MovieDetails } from './pages/MovieDetails';
import { LandingPage } from './pages/LandingPage';
import { TvPage } from './pages/TvPage';
import { TvDetails } from './pages/TvDetails';
import { TbError404Off } from 'react-icons/tb';
import { Home } from './pages/Home';

export function App() {
  return (
    <Router>
      <header>
        <div className={styles.container}>
          <img className={styles.imageMovie} src="icon-movie.png" width={50} height={50} alt="movie-icon" />
          <Link to="/">{<h1 className={styles.title}>Peliculas </h1>}</Link>
        </div>
      </header>
      <main>
        <Home />
        <Routes>
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="/" element={<LandingPage />} />
          <Route
            path="*"
            element={
              <div className={styles.errorIcon}>
                <TbError404Off />
              </div>
            }
          />

          <Route path="/discover/tv" element={<TvPage />} />
          <Route path="/tv/:tv_id" element={<TvDetails />} />
        </Routes>
      </main>
    </Router>
  );
}
