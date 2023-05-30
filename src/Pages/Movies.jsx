import fetchSearchMovies from 'API/GetSearchMovies';
import Loader from 'components/Loader';
import MovieList from 'components/MovieInformation/MovieList';
import Search from 'components/Search/Search';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';


const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const movieName = searchParams.get('query');

  useEffect(() => {
    if (!movieName) {
      return;
    }
    async function getMovies() {
      try {
        setLoading(true);
        const response = await fetchSearchMovies(movieName);
        setMovies(response);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    getMovies();
  }, [searchParams, movieName]);

  function onSubmit(data) {
    setSearchParams(data);
  }

  return (
    <div>
      {loading && <Loader />}
      <Search onSubmit={onSubmit} />
      <MovieList array={movies} />
    </div>
  );
};

export default Movies;