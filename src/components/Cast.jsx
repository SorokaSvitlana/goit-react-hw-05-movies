import fetchMovieCredits from 'API/GetMovieCredits';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import img from '../components/not-found-logo-brand.png'



const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function getMovieById() {
      try {
        const response = await fetchMovieCredits(movieId);
        setCast(response);
      } catch (error) {
        console.log(error);
      }
    }
    getMovieById();
  }, [movieId]);

  return (
    <div>
      <ul>
        {cast.map(element => {
          const imageUrl = element.profile_path
            ? `https://image.tmdb.org/t/p/w200/${element.profile_path}`
            : img
          return (
            <li key={element.id}>
              <img src={imageUrl} width="200" alt={element.name} />
              <h5>{element.name}</h5>
              <p>{element.character}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Cast;