import styled from 'styled-components';
import Col from 'react-bootstrap/Col';

export const StyledCol = styled(Col)`
  margin-bottom: calc(var(--bs-gutter-x) * 1  );
  & .col-title {
    color: ${props => props.theme.lightAccent};
    margin-bottom: calc(var(--bs-gutter-x) * 1);
  }
  .card-container {
    padding-bottom: calc(var(--bs-gutter-x) * .5);
  }
  .card-container:last-child {
    padding-bottom: 0;
  }
  .center {
    max-width: 500px;
    width: 100%;
    margin: auto;
  }
`;