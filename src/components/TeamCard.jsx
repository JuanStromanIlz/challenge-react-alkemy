import { StyledCard, CardList } from 'styled-components/Card';

export default function TeamCard({teamStats}) {
  return (
    <StyledCard>
      <StyledCard.Body>
        <StyledCard.Title>Team Stats</StyledCard.Title>
        <CardList>
          {Object.entries(teamStats).map(power => 
            <CardList.Item key={power[0]}>
              <span className={`powerstats ${power[0]}`}>{power[0]}:</span>
              <span>{power[1]}</span>
            </CardList.Item>
          )}
        </CardList>
      </StyledCard.Body>
    </StyledCard>
  );
}
