import React from 'react';
import { Link, useLocation } from 'react-router-dom';


const MovieList = ({ array }) => {
  const location = useLocation();
  const routeName = location.pathname.includes('/movies') ? '' : 'movies/';

  return (
    <ul>
      {array.map(element => {
        return (
          <li key={element.id}>
            <Link to={`${routeName}${element.id}`} state={{ from: location }}>
              {element.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieList;