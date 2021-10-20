import styled from 'styled-components';
import Card from 'react-bootstrap/Card';

export const StyledListCard = styled(Card)`
  margin-bottom: calc(var(--bs-gutter-x) * .5);
  flex-direction: row;
  border: none;
  border-radius: 0px;
  background: ${props => props.theme.lightAccent};
  & .card-img {
    border: none;
    border-radius: 0px;
    width: calc(100% / 5);
    padding: 1rem 0 1rem 1rem;
  }
  & .card-body {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .actions {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
  & .card-title {
    margin: auto 0;
    color: ${props => props.theme.black};
    font-size: 1.5rem;
    font-weight: 600;
  }
`;