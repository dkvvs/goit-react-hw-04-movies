import { useState, useEffect } from 'react';
import apiServices from '../../services/apiServices';

export default function Reviews({ movieId }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    apiServices
      .getMovieReviews(movieId)
      .then(setReviews)
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <div>
      {reviews.length === 0 && <p>We don't have any reviews for this movie.</p>}

      <ul>
        {reviews &&
          reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}
