import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ListContainer = styled.ul`
  list-style-type: none;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #333;

  &:hover {
    color: red;
  }
`;

export {ListContainer, ListItem, StyledLink}
