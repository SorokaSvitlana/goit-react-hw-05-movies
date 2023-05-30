import fetchMovieDetails from 'API/GetMovieDetails';
import { useState, useEffect, Suspense } from 'react';
import { useParams, Outlet, Link } from 'react-router-dom';
import MovieInfo from '../MovieInformation/MovieInfo';
import Loader from '../Loader';
import { AdditionalInfoContainer, AdditionalInfoItem, AdditionalInfoLink, AdditionalInfoList, AdditionalInfoTitle } from './MovieDetails.Styled';


const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();

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
    }
    getMovieById();
  }, [movieId]);
  return (
    <AdditionalInfoContainer>
      {loading && <Loader />}
      <Link to='/'>Go back</Link>
      <MovieInfo movie={movie} genres={genres} />
      <AdditionalInfoTitle>Additional information</AdditionalInfoTitle>
      <AdditionalInfoList>
        <AdditionalInfoItem><AdditionalInfoLink to="cast">Cast</AdditionalInfoLink></AdditionalInfoItem>
        <AdditionalInfoItem><AdditionalInfoLink to="reviews">Reviews</AdditionalInfoLink></AdditionalInfoItem>
      </AdditionalInfoList>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </AdditionalInfoContainer>
  );
};

export default MovieDetails;
