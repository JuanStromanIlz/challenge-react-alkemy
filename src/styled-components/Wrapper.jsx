import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';

const StyledContainer = styled(Container)`
  ${'' /* padding: .8rem; */}
  .hero-cards {
    & .col-auto {
      padding-bottom: calc(var(--bs-gutter-x) * .5);
    }
    & .col-md-6 {
      padding-bottom: calc(var(--bs-gutter-x) * 1);
    }
  }
`;

export const InfoTeam = styled(Col)`
  padding-top: calc(var(--bs-gutter-x) * .5);
`;

export const TeamContainer = styled(Col)`
  padding-top: calc(var(--bs-gutter-x) * .5);
  padding-bottom: calc(var(--bs-gutter-x) * .5);
  .card-container {
    padding-bottom: calc(var(--bs-gutter-x) * .5);
  }
  .card-container:last-child {
    padding-bottom: 0;
  }
  @media (min-width: 768px) {
    .card-container:nth-last-child(2) {
      padding-bottom: 0;
    }
  }
  @media (min-width: 1200px) {
    .card-container:nth-last-child(3) {
      padding-bottom: 0;
    }
  }
`;

export function Wrapper({children}) {
  return (
    <StyledContainer fluid>
      {children}
    </StyledContainer>
  );
}