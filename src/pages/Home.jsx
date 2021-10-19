import Navbar from 'components/Navbar';
import { Wrapper, TeamContainer, InfoTeam } from 'styled-components/Wrapper';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useContext, useEffect } from 'react';
import { Team } from 'context/TeamContext';
import { useState } from 'react';
import TeamCard from 'components/TeamCard';
import HeroCard from 'components/HeroCard';

export default function Home() {
  const { team, removeHero } = useContext(Team);
  const [teamStats, setTeamStats] = useState({});

  useEffect(()=> {
    
    const sumStats = (stats) => stats.reduce((a, b) => a + parseInt(b), 0);
    
    function globalStats(team) {

      let globalStats = [];

      let teamStats = team.map(team => ({...team.powerstats}));
      let keyInObjects = Object.keys(teamStats[0]);
      for (let i = 0; i < keyInObjects.length; i++) {
        let key = keyInObjects[i];
        let valuePerHero = teamStats.map(hero => hero[key]);

        globalStats.push([key, sumStats(valuePerHero)]);
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
    
    globalStats(team);
    weightAndHeight(team);
  }, [team]);

  return (
    <Wrapper>
      <Row>
        <Navbar />
      </Row>
      <Row>
        <InfoTeam xs={12} lg={3}>
          <TeamCard teamStats={teamStats} />
        </InfoTeam>
        <TeamContainer xs={12} lg={9}>
          <Row>
            {team.map(hero =>
              <Col className='card-container' xs={12} md={6} lg={6} xl={4}>
                <HeroCard removeHero={removeHero} key={hero.id} hero={hero} />
              </Col>
            )}
            <Col className='card-container' xs={12} md={6} lg={6} xl={4}></Col>
          </Row>
        </TeamContainer>
      </Row>
    </Wrapper>
  );
}