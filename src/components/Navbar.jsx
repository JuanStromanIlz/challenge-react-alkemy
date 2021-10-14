import Nav from 'react-bootstrap/Nav';
import StyledForm from 'styled-components/Form';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';

const StyledNav = styled(Nav)`
  background: ${props => props.theme.grey};
  .icon {
    margin-right: 16px;
  }
  .searchInput {
    display: flex;
    flex-direction: row;
    input {
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
    }
    button {
      border-top-left-radius: 0px;
      border-bottom-left-radius: 0px;
    }
  }
`;

export default function Navbar() {
  return (
    <StyledNav>
      <div className='icon'>
        <h1>ST</h1>
      </div>
      <StyledForm onSubmit={(e)=> console.log(e)}>
        <div className='searchInput'>
          <StyledForm.Control placeholder='Search a hero' />
          <Button type='sbmit'>search</Button>
        </div>
      </StyledForm>
    </StyledNav>
  );
}