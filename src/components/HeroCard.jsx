import { useState } from 'react';
import { StyledCard, CardList } from 'styled-components/Card';
import { StyledButton, dark } from 'styled-components/Button';
import { DeleteModal } from './DeleteModal';
import { DetailModal } from './DetailModal';

export default function HeroCard({hero, removeHero}) {
  const [deleteModal, setDeleteModal] = useState(false);
  const [detailModal, setDetailModal] = useState(false);

  const closeDeleteModal = () => setDeleteModal(false);
  const openDeleteModal = () => setDeleteModal(true);

  const closeDetailModal = () => setDetailModal(false);
  const openDetailModal = () => setDetailModal(true);

  function deleteFromTeam() {
    removeHero(hero.id);
  }

  return (
    <>
      <StyledCard>
        <StyledCard.Img src={hero.image.url} alt='Hero Name' />
        <StyledCard.ImgOverlay>
          <div className='card-actions'>
            <StyledButton variant={dark} onClick={()=> openDetailModal()}>more info</StyledButton>
            <StyledButton variant={dark} onClick={()=> openDeleteModal()}>delete</StyledButton>
          </div>
          <StyledCard.Title>{hero.name}</StyledCard.Title>
          <CardList>
            {Object.entries(hero.powerstats).map(power => 
              <CardList.Item key={power[0]}>
                <span className={`powerstats ${power[0]}`}>{power[0]}:</span>
                <span>{power[1]}</span>
              </CardList.Item>
            )}
          </CardList>
        </StyledCard.ImgOverlay>
      </StyledCard>

      {/* StyledModal For delete and details */}
      
      <DeleteModal 
        name={hero.name} 
        show={deleteModal} 
        handleClose={closeDeleteModal} 
        action={deleteFromTeam}
      />

      <DetailModal 
        hero={hero} 
        show={detailModal} 
        handleClose={closeDetailModal} 
      />
    </>
  );
}