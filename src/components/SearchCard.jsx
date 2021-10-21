import { StyledCard } from 'styled-components/Card';
import { StyledButton, success, warning } from 'styled-components/Button';
import { useContext, useEffect, useState } from 'react';
import { Team } from 'context/TeamContext';

export function SearchCard({hero}) {
  const { team, addHero, openDeleteModal } = useContext(Team);
  const [alreadyInTeam, setAlreadyInTeam] = useState(false);

  async function addHeroToTeam(hero) {
    try {
      let res = await addHero(hero);
      console.log(res);
    }
    catch (err) {
      let showError = new Error(err);
      console.log(showError.message);
    }
  }

  useEffect(()=> {

    let teamIsFull = (team) => team.length === 6;
    
    function isAlreadyInTeam(id) {
      let isInTeam = team.find(hero => hero.id === id);

      if (isInTeam) {
        setAlreadyInTeam(true);
      }
    }

    if (teamIsFull(team)) {
      setAlreadyInTeam(true);
    }

    isAlreadyInTeam(hero.id);

  }, [team, hero]);

  return (
    <StyledCard>
      <StyledCard.Img src={hero.image.url} alt={hero.name} />
      <StyledCard.ImgOverlay>
        <div className='card-actions'>
          {alreadyInTeam ? 
            <StyledButton className='material-icons' variant={warning} onClick={()=> openDeleteModal(hero)}>delete_outline</StyledButton>
            : <StyledButton className='material-icons' variant={success} onClick={()=> addHeroToTeam(hero)}>person_add</StyledButton>
          }
        </div>
        <StyledCard.Title>{hero.name}</StyledCard.Title>
      </StyledCard.ImgOverlay>
    </StyledCard>
  );
}