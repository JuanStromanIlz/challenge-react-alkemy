import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import styled from 'styled-components';

export const StyledCard = styled(Card)`
  border: none;
  border-radius: 0px;
  & .card-img {
    border: none;
    border-radius: 0px;
  }
  & .card-img-overlay {
    border: none;
    border-radius: 0px;
    background: ${props => props.theme.white};
    box-shadow: 0px 2px 4px rgba(0,0,0,0.18);
    height: fit-content;
    display: flex;
    flex-direction: column;
    margin-top: auto;
    margin-left: .5rem;
    margin-right: .5rem;
    margin-bottom: .5rem;
    padding-top: 0;
  }
  & .card-body {
    box-shadow: 0px 2px 4px rgba(0,0,0,0.18);
    .card-title {
      padding-top: 0; 
    }
  }
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
    padding-top: 1.5rem;
    font-size: 1.5rem;
    font-weight: 600;
  }
  .card-front, .card-back {
    transform-style: preserve-3d;
    transition: all 1s;
    backface-visibility: hidden;
  }
  .card-back {
    position: absolute;
    inset: 0;
    transform: rotateY(180deg);
    padding: .5rem;
    background: ${props => props.theme.white};
    .back-container {
      background: ${props => props.theme.white};
      box-shadow: 0px 0px 0px 2px rgba(0,0,0,0.18);
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 1rem;
      .return-box {
        display: flex;
        flex-direction: row;
        margin-bottom: 1rem;
        button {
          margin-left: auto;
        }
      }
      .list-group {
        display: flex;
        .double {
          display: flex;
          flex-direction: row;
          .on-row {
            width: 50%;
          }
        }
      }
    }
  }
  .flip-front {
    visibility: hidden;
    transform: rotateY(180deg);
  }
  .flip-back {
    transform: rotateY(360deg);
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
    .title {
      font-weight: bold;
      margin-right: .25rem;
      text-transform: capitalize;
    }
    ${'' /* span:last-child {
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    } */}
  }
  & .list-group-item:last-child {
    margin-bottom: 0;
  }
`;