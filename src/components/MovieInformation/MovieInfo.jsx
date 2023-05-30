import { Container, GenresText, GenresTitle, MovieDetails, MovieDetailsContainer, MovieImage, MovieTitle, OverviewText, OverviewTitle, UserScore } from "./MovieInfo.Styled";

const MovieInfo = ({ movie, genres }) => {
  return (
    <Container>
    <MovieImage
      src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
      alt={movie.original_title}
    />
    <MovieDetails>
      <MovieDetailsContainer>
        <MovieTitle>{movie.original_title}</MovieTitle>
        <UserScore>User Score: {(movie.vote_average / 10 * 100).toFixed(2) + '%'}</UserScore>
      </MovieDetailsContainer>
      <MovieDetailsContainer>
        <OverviewTitle>Overview</OverviewTitle>
        <OverviewText>{movie.overview}</OverviewText>
      </MovieDetailsContainer>
      <MovieDetailsContainer>
        <GenresTitle>Genres</GenresTitle>
        <GenresText>{genres.map((el) => el.name).join(', ')}</GenresText>
      </MovieDetailsContainer>
    </MovieDetails>
  </Container>
  );
};

export default MovieInfo;