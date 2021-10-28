import { StyledList } from 'styled-components/List';

export default function TeamCard({teamStats, members}) {
  return (
    <StyledList>
      <StyledList.Item>
        <span className='title'>Members:</span>
        <div className='value'>
          <span>{members} of 6</span>
        </div>
      </StyledList.Item>
      {Object.entries(teamStats).map((power, i) => 
        <StyledList.Item key={power[0]}>
          <span className={`title ${power[0]}`}>{power[0]}:</span>
          <div className='value'>
            <span>{power[1]}</span>
            {i === 0 ? 
              <span className='material-icons mostValue'>star_rate</span>
            : null}
          </div>
        </StyledList.Item>
      )}
    </StyledList>
  );
}
