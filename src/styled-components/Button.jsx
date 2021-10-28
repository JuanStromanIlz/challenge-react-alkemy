import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

export const StyledButton = styled(Button)`
  background: ${props => props.variant.background};
  color: ${props => props.variant.color};
  outline: ${props => props.variant.color};
  box-shadow: 0px 2px 4px rgba(0,0,0,0.18); 
  border: none;
  border-radius: 0px;
  padding: .3rem 1.3rem;
  height: fit-content;
  font-weight: 600;
  text-transform: capitalize;
  &:focus, &:active {
    box-shadow: 0px 0px 0px 2px ${props => props.variant.color};
  }
  @media (hover: hover) {
    &:hover {
      box-shadow: 0px 0px 0px 2px ${props => props.variant.background};
      background: ${props => props.variant.color};
      color: ${props => props.variant.background};
    }
  }
`;

/* Variants */

export const def = {
  color: '#fff',
  background: props => props.theme.states.default
}

export const primary = {
  color: '#fff',
  background: props => props.theme.states.primary
};

export const success = {
  color: '#fff',
  background: props => props.theme.states.success
};

export const warning = {
  color: '#fff',
  background: props => props.theme.states.warning
};

export const info = {
  color: '#fff',
  background: props => props.theme.states.info
};

export const danger = {
  color: '#fff',
  background: props => props.theme.states.danger
}