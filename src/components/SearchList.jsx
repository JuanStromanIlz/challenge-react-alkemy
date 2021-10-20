import { StyledList } from 'styled-components/List';
import { StyledListCard } from 'styled-components/ListCard';
import { StyledButton, success } from 'styled-components/Button';
import { useContext, useEffect, useState } from 'react';
import { Team } from 'context/TeamContext';

function SearchCard({hero}) {
  const { team, addHero } = useContext(Team);
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
    <StyledListCard>
      <StyledListCard.Img src={hero.image.url} alt={hero.name} />
      <StyledListCard.Body>
        <StyledListCard.Title>{hero.name}</StyledListCard.Title>
        <div className='actions'>
          <StyledButton disabled={alreadyInTeam} variant={success} onClick={()=> addHeroToTeam(hero)} className='material-icons'>person_add</StyledButton>
        </div>
      </StyledListCard.Body>
    </StyledListCard>
  );
}

export function SearchList({heroes}) {
  return (
    <StyledList>
      {heroes.map(hero => <SearchCard key={hero.id} hero={hero} />)}
    </StyledList>
  );
}