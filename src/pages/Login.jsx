import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { StyledContainer } from 'styled-components/Container';
import { StyledCol } from 'styled-components/Col';
import LoginForm from 'components/LoginForm';
import AlkemyToken from 'services/AlkemyToken';

export default function Login() {
  const [error, setError] = useState({
    state: false,
    message: null
  });
  let history = useHistory();

  async function validateLogin(values) {
    let res = await AlkemyToken(values);
    if (res.status !== 200) {
      return setError({
        state: true,
        message: res.message
      });
    }
    localStorage.setItem('challange-react-alkemy', JSON.stringify(res.data));
    history.push('/');
  }

  return (
    <StyledContainer fluid>
      <StyledCol xs={12} style={{marginTop: '20vh', display: 'flex'}}>
        <div className='center'>
          <img src='/icon.svg' style={{marginLeft: 'auto', marginRight: 'auto', width: '100%', maxWidth: '48px', display: 'block'}} alt='super hero' />
          <h1 style={{textAlign: 'center', color: 'rgb(186, 24, 27)'}}>Superhero Team</h1>
          {error.status !== false ? 
            <p>{error.message}</p>
          : null}
          <LoginForm onSubmit={validateLogin} />
        </div>
      </StyledCol>
    </StyledContainer>
  );
}