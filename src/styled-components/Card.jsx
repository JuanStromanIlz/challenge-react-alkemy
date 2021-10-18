import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import styled from 'styled-components';

export const StyledCard = styled(Card)`
  border: none;
  & .card-img-overlay {
    background: ${props => props.theme.white};
    height: fit-content;
    display: flex;
    flex-direction: column;
    margin-top: auto;
    margin-left: .5rem;
    margin-right: .5rem;
    margin-bottom: .5rem;
    padding-top: 0;
    & .card-icons {
      display: block;
      margin: auto;
    }
    & .card-icons-white {
      color: ${props => props.theme.white};
    }
    & .card-actions {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      gap: .5rem;
      height: 0px;
      button {
        transform: translateY(-50%);
      }
    }
    & .card-title {
      color: ${props => props.theme.black};
      padding-top: 1.25rem;
      font-size: 1.5rem;
      font-weight: 600;
    }
  }
`;

export const CardList = styled(ListGroup)`
  display: grid;
  grid-template-columns: 50% 50%;
  & .list-group-item {
    background: transparent;
    padding: 0;
    border: none;
    display: flex;
    flex-direciton: row;
    margin-bottom: .125rem;
    .powerstats {
      font-weight: bold;
      margin-right: .25rem;
      text-transform: capitalize;
    }
  }
  & .list-group-item:last-child {
    margin-bottom: 0;
  }
`;