import Container from 'react-bootstrap/Container';
import styled from 'styled-components';

export const StyledContainer = styled(Container)`
  .navbar-sticky {
    position: sticky;
    top: 0;
    z-index: 10;
  }
  .border-col {
    @media (min-width: 1200px) {
      border-right: 1px solid ${props => props.theme.lightShades};
    }
  }
`;