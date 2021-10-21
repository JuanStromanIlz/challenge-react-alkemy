import Modal from 'react-bootstrap/Modal';
import styled from 'styled-components';

export const StyledModal = styled(Modal)`
  & .modal-content {
    border: none;
    border-radius: 0px;
    background: ${props => props.theme.lightAccent};
    > * {
      padding: 1rem;
      border: none;
    }
  }
`;