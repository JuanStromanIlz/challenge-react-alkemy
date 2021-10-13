import {useState} from 'react';
import {useHistory} from 'react-router-dom';
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
    <>
      <h1>Login</h1>
      {error.status !== false ? 
        <p>{error.message}</p>
      : null}
      <LoginForm onSubmit={validateLogin} />
    </>
  );
}