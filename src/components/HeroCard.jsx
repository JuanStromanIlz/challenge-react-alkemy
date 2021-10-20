import { useState, useRef } from 'react';
import { StyledCard, CardList } from 'styled-components/Card';
import { StyledButton, info, warning } from 'styled-components/Button';
import { DeleteModal } from './DeleteModal';

export default function HeroCard({hero, removeHero}) {
  const [deleteModal, setDeleteModal] = useState(false);
  const card = useRef(null);

  const closeDeleteModal = () => setDeleteModal(false);
  const openDeleteModal = () => setDeleteModal(true);

  function deleteFromTeam() {
    removeHero(hero.id);
  }

  function flipCard() {
    card.current.getElementsByClassName('card-front')[0].classList.toggle('flip-front');
    card.current.getElementsByClassName('card-back')[0].classList.toggle('flip-back');
  }

  return (
    <>
      <StyledCard ref={card}>
        <div className='card-front'>
          <StyledCard.Img src={hero.image.url} alt={hero.name} />
          <StyledCard.ImgOverlay>
            <div className='card-actions'>
              <StyledButton className='material-icons' variant={info} onClick={flipCard}>info</StyledButton>
              <StyledButton className='material-icons' variant={warning} onClick={openDeleteModal}>delete_outline</StyledButton>
            </div>
            <StyledCard.Title>{hero.name}</StyledCard.Title>
            <CardList>
              {Object.entries(hero.powerstats).map(power => 
                <CardList.Item key={power[0]}>
                  <span className={`title ${power[0]}`}>{power[0]}:</span>
                  <span>{power[1]}</span>
                </CardList.Item>
              )}
            </CardList>
          </StyledCard.ImgOverlay>
        </div>

        {/** Details Card */}

        <div className='card-back'>
          <div className='back-container'>
            <div className='return-box'>
              <StyledButton className='material-icons' variant={info} onClick={flipCard}>reply</StyledButton>
            </div>
            <CardList>
              <CardList.Item>
                <span className='title'>Full Name:</span>
                <span>{hero.biography['full-name']}</span>
              </CardList.Item>
              <div className='double'>
                <CardList.Item className='on-row'>
                  <span className='title'>Height:</span>
                  <span>{hero.appearance.height[1]}</span>
                </CardList.Item>
                <CardList.Item className='on-row'>
                  <span className='title'>Weight:</span>
                  <span>{hero.appearance.weight[1]}</span>
                </CardList.Item>
              </div>
              <div className='double'>
                <CardList.Item className='on-row'>
                  <span className='title'>Eye Color:</span>
                  <span>{hero.appearance['eye-color']}.</span>
                </CardList.Item>
                <CardList.Item className='on-row'>
                  <span className='title'>Hair Color:</span>
                  <span>{hero.appearance['hair-color']}.</span>
                </CardList.Item>
              </div>
              <CardList>
                <CardList.Item>
                  <span className='title'>aliases:</span>
                </CardList.Item>
                <p>
                  {hero.biography.aliases.map((alias, i, {length}) =>
                    i + 1 === length ? 
                    <span>{alias}.</span>
                    : <span>{alias},&#32;</span>
                  )}
                </p>
              </CardList>
              <CardList.Item>
                <span className='title'>Work:</span>
                <span>{hero.work.base}.</span>
              </CardList.Item>
            </CardList>
          </div>
        </div>
      </StyledCard>

      {/* StyledModal For delete */}
      
      <DeleteModal 
        name={hero.name} 
        show={deleteModal} 
        handleClose={closeDeleteModal} 
        action={deleteFromTeam}
      />
    </>
  );
}