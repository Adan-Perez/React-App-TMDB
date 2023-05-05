import { useSearchParams } from 'react-router-dom';
import { Search } from '../components/Search';
import { TvMoviesGrid } from '../components/TvMoviesGrid';
import { useDebounce } from '../hooks/useDebounce';

export function TvPage() {
  const [query] = useSearchParams();
  const search = query.get('search');
  const debouncedSearch = useDebounce(search, 300);
  return (
    <div>
      <Search />
      <TvMoviesGrid key={debouncedSearch} search={debouncedSearch} />
    </div>
  );
}
