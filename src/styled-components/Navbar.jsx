import styled from 'styled-components';
import Navbar from 'react-bootstrap/Navbar';

export const StyledNavbar = styled(Navbar)`
  background: ${props => props.theme.main};
  .container-fluid {
    padding: 0;
    justify-content: flex-start;
    .navbar-brand {
      color: ${props => props.theme.main};
    }
  }
`;