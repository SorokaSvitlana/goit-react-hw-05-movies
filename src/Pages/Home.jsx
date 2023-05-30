import { useState, useEffect } from 'react';
import MovieList from 'components/MovieList';
import Loader from 'components/Loader';
import fetchTranding from 'API/GetTrending';

const Home = () => {
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getMovieList() {
      try {
        setLoading(true);
        const response = await fetchTranding();
        setMovieList([...response]);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    getMovieList();
  }, []);
console.log(movieList)
  return (
    <>
      {loading && <Loader />}
      <h1>Trending today</h1>
      <MovieList array={movieList} />
    </>
  );
};

export default Home;