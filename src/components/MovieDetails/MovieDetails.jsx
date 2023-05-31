import fetchMovieDetails from 'API/GetMovieDetails';
import { useState, useEffect, Suspense } from 'react';
import { useParams, Outlet, Link, useLocation } from 'react-router-dom';
import MovieInfo from '../MovieInformation/MovieInfo';
import Loader from '../Loader';
import { AdditionalInfoContainer, AdditionalInfoItem, AdditionalInfoLink, AdditionalInfoList, AdditionalInfoTitle } from './MovieDetails.Styled';


const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();
	const backLink = location.state?.from ?? "/movies";

  useEffect(() => {
    async function getMovieById() {
      try {
        setLoading(true);
        const response = await fetchMovieDetails(movieId);
        setMovie(response);
        setGenres(response.genres);
        setLoading(false);
      } catch {
        console.log('error');
      } 
      finally {
        
      }
    }
    getMovieById();
  }, [movieId]);
  return (
    <AdditionalInfoContainer>
      
          <Link to={backLink}>Go back</Link>
          {Object.keys(movie).length > 0 ? (
             <>
             {loading && <Loader />}
          <MovieInfo movie={movie} genres={genres} />
          <AdditionalInfoTitle>Additional information</AdditionalInfoTitle>
          <AdditionalInfoList>
            <AdditionalInfoItem>
              <AdditionalInfoLink to="cast">Cast</AdditionalInfoLink>
            </AdditionalInfoItem>
            <AdditionalInfoItem>
              <AdditionalInfoLink to="reviews">Reviews</AdditionalInfoLink>
            </AdditionalInfoItem>
          </AdditionalInfoList>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </>
      ) : (
        <h2>No data available</h2>
      )}
    </AdditionalInfoContainer>
  );
};

export default MovieDetails;
