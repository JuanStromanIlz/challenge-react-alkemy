import { createContext, useState } from 'react';
import teamJSON from '../team.json';

const Team = createContext();
const {Consumer, Provider} = Team;

export default function TeamContext({children}) {
  const [team, setTeam] = useState([...teamJSON]);

  function addHero(newHero) {

    const teamIsFull = team.length === 6;

    const alignmentIsFull = (newHeroAlignment) => team.filter(hero => hero.biography.alignment === newHeroAlignment).length === 3;

    if (teamIsFull) {
      throw new Error('Team is full already.');
    }
    if (alignmentIsFull(newHero.biography.alignment)) {
      throw new Error(`You need to pickup a hero with ${newHero.biography.alignment === 'good' ? 'bad' : 'good' } alignment, the ${newHero.biography.alignment} side is already full.`);
    }

    setTeam(prevTeam => [...prevTeam, newHero]);
    localStorage.setItem('superheroTeam', JSON.stringify(team));
    return 'Hero added successfully.';
  }

  function removeHero(id) {

    const teamIsEmpty = team.length === 0;

    if (teamIsEmpty) {
      throw new Error('Team is empty.');
    }

    setTeam(prevTeam => prevTeam.filter(hero => hero.id !== id));
    return 'Hero removed successfully';
  }

  return (
    <Provider value={{
      team: team,
      addHero: addHero,
      removeHero: removeHero
    }}>
      {children}
    </Provider>
  );
}

export { Team, Consumer };