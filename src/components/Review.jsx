import fetchMovieReviews from 'API/GetMovieReviews';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function getMovieById() {
      try {
        const response = await fetchMovieReviews(movieId);
        setReviews(response);
      } catch (error) {
        console.log(error);
      }
    }
    getMovieById();
  }, [movieId]);

  return (
    <div>
      <ul>
        {reviews.length === 0 ? (
          <p>We don`t have any reviews for this movie</p>
        ) : (
          reviews.map(element => {
            return (
              <li key={element.id}>
                <h5>{element.author}</h5>
                <p>{element.content}</p>
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
};

export default Reviews;