import { useEffect, useState } from 'react';
import { get } from '../utils/httpClient';
import styles from './MoviesGrid.module.css';
import { Spinner } from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Empty } from './Empty';
import { TvCard } from './TvCard';

export function TvMoviesGrid({ search }) {
  const [tvs, setTvs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const searchUrl = search ? '/search/tv?query=' + search + '&page=' + page : '/discover/tv?page=' + page;
    get(searchUrl).then((data) => {
      setTvs((prevTvs) => prevTvs.concat(data.results));
      setHasMore(data.page < data.total_pages);
      setIsLoading(false);
    });
  }, [search, page]);

  if (!isLoading && tvs.length === 0) {
    return <Empty />;
  }

  return (
    <InfiniteScroll dataLength={tvs.length} hasMore={hasMore} next={() => setPage((prevPage) => prevPage + 1)} loader={<Spinner />}>
      <ul className={styles.moviesGrid}>
        {tvs.map((tv) => (
          <TvCard key={tv.id} tv={tv} />
        ))}
      </ul>
    </InfiniteScroll>
  );
}
