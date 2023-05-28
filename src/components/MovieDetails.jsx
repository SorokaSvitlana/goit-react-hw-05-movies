import fetchMovieDetails from "API/GetMovieDetails";
import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const movieDetails = () => {
    const [movie, setMovie] = useState({});
    const [genres, setGenres] = useState([]);
    // const [loading, setLoading] = useState(false);
    const { movieId } = useParams();
  
    useEffect(() => {
      async function getMovieDet() {
        try {
        //   setLoading(true);
          const response = await fetchMovieDetails(movieId);
          setMovie(response);
          setGenres(response.genres);
        } catch (error) {
          console.log(error);
        }
      }
      getMovieDet();
    }, [movieId]);
    const location = useLocation();
}

export default movieDetails