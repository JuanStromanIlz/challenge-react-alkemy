import Navbar from 'components/Navbar';
import { StyledContainer } from 'styled-components/Container';
import { StyledCol } from 'styled-components/Col';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useContext, useEffect } from 'react';
import { Team } from 'context/TeamContext';
import { useState } from 'react';
import TeamCard from 'components/TeamCard';
import HeroCard from 'components/HeroCard';
import Loading from 'styled-components/Loading';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const { team, openDeleteModal } = useContext(Team);
  const [teamStats, setTeamStats] = useState({});

  useEffect(()=> {
    
    function isNumber(array) {
      return array.map(el => {
        if (isNaN(parseInt(el))) {
          return 0;
        } else {
          return parseInt(el);
        }
      });
      
    }

    const sumStats = (stats) => stats.reduce((a, b) => a + b, 0);

    const teamIsEmpty = (team) => team.length === 0;
    
    function globalStats(team) {

      let globalStats = [];

      let teamStats = team.map(team => ({...team.powerstats}));
      let keyInObjects = Object.keys(teamStats[0]);
      for (let i = 0; i < keyInObjects.length; i++) {
        let key = keyInObjects[i];
        let valuePerHero = teamStats.map(hero => hero[key]);

        let valueToNumber = isNumber(valuePerHero);

        globalStats.push([key, sumStats(valueToNumber)]);
      }
      /* sort from max to min */
      globalStats = globalStats.sort((a, b) => {
        a = a[1];
        b = b[1];
        return a > b ? -1 : (a < b ? 1 : 0);
      });
      /* convert to js object */
      globalStats = globalStats.reduce((a, v) => ({ ...a, [v[0]]: v[1]}), {});

      setTeamStats(globalStats);
    }

    function weightAndHeight(team) {

      let globalStats = {};

      const sliceValue = (string) => parseInt(string.slice(0, -3));

      let teamStats = team.map(team => (
        {
          height: sliceValue(team.appearance.height[1]), 
          weight: sliceValue(team.appearance.weight[1])
        }
      ));
      let keyInObjects = Object.keys(teamStats[0]);
      for (let i = 0; i < keyInObjects.length; i++) {
        let key = keyInObjects[i];
        let valuePerHero = teamStats.map(hero => hero[key]);

        globalStats[key] =  (sumStats(valuePerHero) / team.length).toFixed(2);
      }

      setTeamStats(team => ({...team, ...globalStats}));
    }
    
    if (!teamIsEmpty(team)) {
      globalStats(team);
      weightAndHeight(team);
    }

    return ()=> {
      setLoading(false);
    }
  }, [team]);

  return (
    <StyledContainer fluid>
      <Row className='navbar-sticky'>
        <Navbar />
      </Row>
      <Row>
        {loading ?
          <Loading />
        :
          <>
            <StyledCol className='border-col' xs={12} lg={3}>
            {team.length > 0 ?
              <div className='sticky-col'>
                <h4 className='col-title'>Team Stats</h4>
                  <TeamCard teamStats={teamStats} members={team.length} />
              </div>
            : null}
            </StyledCol>
            <StyledCol xs={12} lg={9}>
              {team.length > 0 ? 
                <>
                  <h4 className='col-title'>Your Team</h4>
                  <Row>
                    {team.map(hero =>
                      <Col className='card-container' key={hero.id} xs={12} md={6} lg={6} xl={4}>
                        <HeroCard deleteHero={openDeleteModal} hero={hero} />
                      </Col>
                    )}
                    <Col className='card-container' xs={12} md={6} lg={6} xl={4}></Col>
                  </Row>
                </>
              : <h4 className='col-title'>Your Team is empty</h4>}
            </StyledCol>
          </>
        }
      </Row>
    </StyledContainer>
  );
}