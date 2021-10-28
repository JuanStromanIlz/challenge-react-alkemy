import { StyledContainer } from 'styled-components/Container';
import { StyledCol } from 'styled-components/Col';
import LoginForm from 'components/LoginForm';

export default function Login() {

  return (
    <StyledContainer fluid>
      <StyledCol xs={12} style={{marginTop: '20vh', display: 'flex'}}>
        <div className='center'>
          <img src='/icon.svg' style={{marginLeft: 'auto', marginRight: 'auto', width: '100%', maxWidth: '48px', display: 'block'}} alt='super hero' />
          <h1 style={{textAlign: 'center', color: 'rgb(186, 24, 27)'}}>Superhero Team</h1>
          <LoginForm />
        </div>
      </StyledCol>
    </StyledContainer>
  );
}