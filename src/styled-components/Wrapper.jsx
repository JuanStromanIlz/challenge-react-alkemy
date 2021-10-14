import Container from 'react-bootstrap/Container';
import styled from 'styled-components';

const StyledContainer = styled(Container)`
  padding: .8rem;
`;

export default function Wrapper({children}) {
  return (
    <StyledContainer fluid>
      {children}
    </StyledContainer>
  );
}