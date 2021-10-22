import { useRef, useState, useEffect, useContext } from 'react';
import { Team } from 'context/TeamContext';
import { StyledCard, CardList } from 'styled-components/Card';
import { StyledButton, info, warning, success } from 'styled-components/Button';

export default function HeroCard({hero, simpleCard}) {
  const { team, addHero, openDeleteModal } = useContext(Team);
  const [alreadyInTeam, setAlreadyInTeam] = useState(false);
  const card = useRef(null);

  function flipCard() {
    card.current.getElementsByClassName('card-front')[0].classList.toggle('flip-front');
    card.current.getElementsByClassName('card-back')[0].classList.toggle('flip-back');
  }

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
    function isAlreadyInTeam(id, team) {
      let isInTeam = team.find(hero => hero.id === id);

      if (isInTeam) {
        setAlreadyInTeam(true);
      }
    }

    isAlreadyInTeam(hero.id, team);

  }, [team, hero]);

  return (
    <>
      <StyledCard ref={card}>
        <div className='card-front'>
          <StyledCard.Img src={hero.image.url} alt={hero.name} />
          <StyledCard.ImgOverlay>
            <div className='card-actions'>
              {!alreadyInTeam && <StyledButton className='material-icons' variant={success} onClick={()=> addHeroToTeam(hero)}>person_add</StyledButton>}
              {simpleCard ? null : <StyledButton className='material-icons' variant={info} onClick={flipCard}>info</StyledButton>}
              {alreadyInTeam && <StyledButton className='material-icons' variant={warning} onClick={() => openDeleteModal(hero)}>delete_outline</StyledButton>}
            </div>
            <StyledCard.Title>{hero.name}</StyledCard.Title>
            {simpleCard ? 
              null
            : 
              <CardList>
                {Object.entries(hero.powerstats).map(power => 
                  <CardList.Item key={power[0]}>
                    <span className={`title ${power[0]}`}>{power[0]}:</span>
                    <span>{power[1]}</span>
                  </CardList.Item>
                )}
              </CardList>
            }
          </StyledCard.ImgOverlay>
        </div>

        {/** Details Card */}

        {simpleCard ?
          null
        :
          <div className='card-back'>
            <div className='back-img'></div>
            <div className='back-container'>
              <div className='return-box'>
                <StyledButton className='material-icons' variant={info} onClick={flipCard}>reply</StyledButton>
              </div>
              <CardList>
                <CardList.Item>
                  <span className='title'>Full Name:</span>
                  <span className='value'>{hero.biography['full-name']}</span>
                </CardList.Item>
                <div className='double'>
                  <CardList.Item className='on-row'>
                    <span className='title'>Height:</span>
                    <span className='value'>{hero.appearance.height[1]}</span>
                  </CardList.Item>
                  <CardList.Item className='on-row'>
                    <span className='title'>Weight:</span>
                    <span className='value'>{hero.appearance.weight[1]}</span>
                  </CardList.Item>
                </div>
                <div className='double'>
                  <CardList.Item className='on-row'>
                    <span className='title'>Eye Color:</span>
                    <span className='value'>{hero.appearance['eye-color']}.</span>
                  </CardList.Item>
                  <CardList.Item className='on-row'>
                    <span className='title'>Hair Color:</span>
                    <span className='value'>{hero.appearance['hair-color']}.</span>
                  </CardList.Item>
                </div>
                <CardList>
                  <CardList.Item>
                    <span className='title'>aliases:</span>
                  </CardList.Item>
                  <p>
                    {hero.biography.aliases.map((alias, i, {length}) =>
                      i + 1 === length ? 
                      <span key={i} className='value'>{alias}.</span>
                      : <span key={i} className='value'>{alias},&#32;</span>
                    )}
                  </p>
                </CardList>
                <CardList.Item>
                  <span className='title'>Work:</span>
                  <span className='value'>{hero.work.base}.</span>
                </CardList.Item>
              </CardList>
            </div>
          </div>
        }
      </StyledCard>
    </>
  );
}