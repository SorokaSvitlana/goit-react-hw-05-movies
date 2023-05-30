import fetchMovieCredits from 'API/GetMovieCredits';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import img from '.././not-found-logo-brand.png'
import { CastCharacter, CastImage, CastItem, CastList, CastName, Container } from './Cast.Styled';



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
    <Container>
      <CastList >
        {cast.map(element => {
          const imageUrl = element.profile_path
            ? `https://image.tmdb.org/t/p/w200/${element.profile_path}`
            : img
          return (
            <CastItem key={element.id}>
              <CastImage src={imageUrl} width="200" alt={element.name} />
              <CastName>{element.name}</CastName>
              <CastCharacter>{element.character}</CastCharacter>
            </CastItem>
          );
        })}
      </CastList >
    </Container>
  );
};

export default Cast;