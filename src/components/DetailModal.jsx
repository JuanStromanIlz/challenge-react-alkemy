import { StyledModal } from 'styled-components/Modal';
import { StyledButton, dark } from 'styled-components/Button';
import { CardList } from 'styled-components/Card';

export function DetailModal({hero, show, handleClose}) {
  return (
    <StyledModal show={show} onHide={handleClose} animation={true} autoFocus={true} centered={true}>
      <StyledModal.Header closeButton>
        <StyledModal.Title>Detail</StyledModal.Title>
      </StyledModal.Header>
      <StyledModal.Body>
        <CardList>
          <CardList.Item>{hero.name}</CardList.Item>
          <CardList.Item>
            <span className='item-title'>Full Name:</span>
            <span>{hero.biography['full-name']}</span>
          </CardList.Item>
          <CardList.Item>
            <span className='item-title'>Height:</span>
            <span>{hero.appearance.height[1]}</span>
          </CardList.Item>
          <CardList.Item>
            <span className='item-title'>Weight:</span>
            <span>{hero.appearance.weight[1]}</span>
          </CardList.Item>
          <CardList.Item>
            <span className='item-title'>Eye Color:</span>
            <span>{hero.appearance['eye-color']}</span>
          </CardList.Item>
          <CardList.Item>
            <span className='item-title'>Hair Color:</span>
            <span>{hero.appearance['hair-color']}</span>
          </CardList.Item>
          <CardList.Item>
            <span className='item-title'>Work:</span>
            <span>{hero.work.base}</span>
          </CardList.Item>
        </CardList>
      </StyledModal.Body>
      <StyledModal.Footer>
        <StyledButton variant={dark} onClick={handleClose}>
          Close
        </StyledButton>
      </StyledModal.Footer>
    </StyledModal>
  );
}