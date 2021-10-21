import { StyledModal } from 'styled-components/Modal';
import { StyledButton, def, danger } from 'styled-components/Button';

export function DeleteModal({hero, show, handleClose, action}) {
  return (
    <StyledModal show={show} onHide={handleClose} animation={true} centered={true}>
      <StyledModal.Header closeButton>
        <StyledModal.Title>Delete from team</StyledModal.Title>
      </StyledModal.Header>
      <StyledModal.Body>Are you sure to delete <strong>{hero.name}</strong> from your team?</StyledModal.Body>
      <StyledModal.Footer>
        <StyledButton variant={def} onClick={handleClose}>
          Cancel
        </StyledButton>
        <StyledButton variant={danger} onClick={()=> action(hero.id)}>
          Delete
        </StyledButton>
      </StyledModal.Footer>
    </StyledModal>
  );
}