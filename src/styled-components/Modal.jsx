import Modal from 'react-bootstrap/Modal';
import styled from 'styled-components';

export const StyledModal = styled(Modal)`
  ${'' /* & .modal-dialog {
    margin: 1rem;
  }
  & .modal-dialog-centered {
    min-height: calc(100% - 2rem);
  } */}
  & .modal-content {
    background: ${props => props.theme.white};
    > * {
      padding: 1rem;
    }
  }
`;