
const MovieInfo = ({ movie, genres }) => {
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
        alt={movie.original_title}
      />
      <ul>
          <li>
            <h2>{movie.original_title}</h2>
            <p> User Score:  {(movie.vote_average / 10 * 100).toFixed(2) + '%'}
            </p>
          </li>
          <li>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
          </li>
          <li>
            <h4>Genres</h4>
            <p>{genres.map(el => el.name).join(', ')}</p>
          </li>

      </ul>
    </div>
  );
};

export default MovieInfo;