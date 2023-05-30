import React from 'react';
import { useLocation } from 'react-router-dom';
import { ListContainer, ListItem, StyledLink } from './MovieList.Styled';


const MovieList = ({ array }) => {
  const location = useLocation();
  const routeName = location.pathname.includes('/movies') ? '' : 'movies/';

  return (
    <ListContainer>
      {array.map(element => {
        return (
          <ListItem key={element.id}>
            <StyledLink to={`${routeName}${element.id}`} state={{ from: location }}>
              {element.title}
            </StyledLink>
          </ListItem>
        );
      })}
    </ListContainer>
  );
};

export default MovieList;