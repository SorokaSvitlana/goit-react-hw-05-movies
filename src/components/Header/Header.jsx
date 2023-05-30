
import { Nav, StyledNavLink } from "./Header.Styled"

const Header = () => {
    return (
        <Nav>
        <StyledNavLink to = '/'> Home </StyledNavLink> 
        <StyledNavLink to = '/movies'> Movies </StyledNavLink> 
      </Nav>)
}

export default Header