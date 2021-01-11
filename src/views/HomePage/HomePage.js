import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import apiServices from '../../services/apiServices';

export default function HomePage() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    apiServices
      .getTrendingMovies()
      .then(setMovies)
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {movies &&
          movies.map(({ id, title }) => (
            <li key={id}>
              <Link to={`movies/${id}`}>{title}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
