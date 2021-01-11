import { useState, useEffect } from 'react';
import { Link, useHistory, useRouteMatch, useLocation } from 'react-router-dom';
import SearchBar from '../../components/SearchBar/SearchBar';
import apiServices from '../../services/apiServices';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const history = useHistory();
  const location = useLocation();
  const { url } = useRouteMatch();

  useEffect(() => {
    const query = new URLSearchParams(location.search).get('query');

    if (query) {
      apiServices
        .searchMovies(query)
        .then(setMovies)
        .catch(error => console.log(error));
    }
  }, [location.search]);

  const handleSearchSubmit = query => {
    apiServices.searchMovies(query).then(setMovies);
    history.push({ ...location, search: `query=${query}` });
  };

  return (
    <div>
      <SearchBar onSearch={handleSearchSubmit} />

      <ul>
        {movies.map(({ id, title }) => (
          <li key={id}>
            <Link to={`${url}/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
