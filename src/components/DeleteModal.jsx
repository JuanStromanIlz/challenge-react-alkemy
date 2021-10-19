import { StyledModal } from 'styled-components/Modal';
import { StyledButton, dark, danger } from 'styled-components/Button';

export function DeleteModal({name, show, handleClose, action}) {
  return (
    <StyledModal show={show} onHide={handleClose} animation={true} centered={true}>
      <StyledModal.Header closeButton>
        <StyledModal.Title>Delete from team</StyledModal.Title>
      </StyledModal.Header>
      <StyledModal.Body>Are you sure to delete <strong>{name}</strong> from your team?</StyledModal.Body>
      <StyledModal.Footer>
        <StyledButton variant={dark} onClick={handleClose}>
          Cancel
        </StyledButton>
        <StyledButton variant={danger} onClick={action}>
          Delete
        </StyledButton>
      </StyledModal.Footer>
    </StyledModal>
  );
}