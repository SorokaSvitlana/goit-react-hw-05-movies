import styled from 'styled-components';
import { NavLink } from "react-router-dom"

const Nav = styled.nav`
  background-color: #f0f0f0;
  padding: 10px;
`;

const StyledNavLink = styled(NavLink)`
  color: #333;
  text-decoration: none;
  margin-right: 10px;

  &:hover {
    color: #000;
  }

  &.active {
    font-weight: bold;
  }
`;

export {Nav, StyledNavLink}

