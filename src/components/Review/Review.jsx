import fetchMovieReviews from 'API/GetMovieReviews';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { NoReviewsMessage, ReviewAuthor, ReviewContainer, ReviewContent, ReviewItem, ReviewList } from './Review.Styled';


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
    <ReviewContainer>
      <ReviewList>
        {reviews.length === 0 ? (
          <NoReviewsMessage>We don't have any reviews for this movie</NoReviewsMessage>
        ) : (
          reviews.map((element) => {
            return (
              <ReviewItem key={element.id}>
                <ReviewAuthor>{element.author}</ReviewAuthor>
                <ReviewContent>{element.content}</ReviewContent>
              </ReviewItem>
            );
          })
        )}
      </ReviewList>
    </ReviewContainer>
  );
};

export default Reviews;