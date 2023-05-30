import fetchMovieDetails from 'API/GetMovieDetails';
import { useState, useEffect, Suspense } from 'react';
import { useParams, Outlet, Link } from 'react-router-dom';
import MovieInfo from './MovieInfo';
import Loader from './Loader';


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
    <div>
      {loading && <Loader />}
      <Link to='/'>Go back</Link>
      <MovieInfo movie={movie} genres={genres} />
      <h2>Additional information</h2>
      <ul>
        <li><Link to="cast">Cast</Link></li>
        <li><Link to="reviews">Reviews</Link></li>
      </ul>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
