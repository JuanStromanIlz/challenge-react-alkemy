import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { StyledContainer } from 'styled-components/Container';
import { StyledCol } from 'styled-components/Col';
import Row from 'react-bootstrap/Row';
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
      <StyledCol xs={12} lg={5}>
        <h1 className='col-title'>Login</h1>
        {error.status !== false ? 
          <p>{error.message}</p>
        : null}
        <LoginForm onSubmit={validateLogin} />
      </StyledCol>
    </StyledContainer>
  );
}