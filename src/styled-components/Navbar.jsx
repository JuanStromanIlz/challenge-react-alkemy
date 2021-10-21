import styled from 'styled-components';
import Navbar from 'react-bootstrap/Navbar';

export const StyledNavbar = styled(Navbar)`
  margin-bottom: 1.5rem;
  .container-fluid {
    padding: 0;
    justify-content: flex-start;
    .navbar-brand {
      color: ${props => props.theme.lightAccent};
      font-weight: 700;
    }
  }
`;