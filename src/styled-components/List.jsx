import ListGroup from 'react-bootstrap/ListGroup';
import styled from 'styled-components';

export const StyledList = styled(ListGroup)`
  & .list-group-item {
    color: ${props => props.theme.lightAccent};
    filter: saturate(200%);
    background: transparent;
    padding: 0;
    border: none;
    display: grid;
    grid-template-columns: 35% auto;
    margin-bottom: .125rem;
    .title {
      display: block;
      font-weight: bold;
      margin-right: 1.5rem;
      text-transform: capitalize;
    }
    .value {
      display: flex;
      > span {
        display: block;
        filter: saturate(200%);
        font-size: inherit;
        margin: auto 0;
      }
      > span:first-of-type {
        margin-right: .3rem;
      }
      .mostValue {
        color: yellow;
      }
    }
  }
`;