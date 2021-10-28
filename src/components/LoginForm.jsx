import { Formik, Form, Field } from 'formik';
import StyledForm from 'styled-components/Form';
import {StyledButton, primary} from 'styled-components/Button';
import * as Yup from 'yup';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import AlkemyToken from 'services/AlkemyToken';

const LogInSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required'),
});


export default function LoginForm({onSubmit}) {
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
    <div>
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        validationSchema={LogInSchema}
        onSubmit={validateLogin}
      >
        {({ errors, touched }) => (
          <StyledForm as={Form}>
          {error.status !== false ? 
            <StyledForm.Text>{error.message}</StyledForm.Text>
          : null}
            <StyledForm.Group className='form-group'>
              <StyledForm.Label>Email</StyledForm.Label>
              <StyledForm.Control as={Field} name='email' type='email' placeholder='Enter email' autoComplete="off" />
              {errors.email && touched.email ?
                <StyledForm.Text>
                  {errors.email}
                </StyledForm.Text>
              : null}
            </StyledForm.Group>
            <StyledForm.Group className='form-group'>
              <StyledForm.Label>Password</StyledForm.Label>
              <StyledForm.Control as={Field} name='password' type='password' placeholder='Enter password' />
              {errors.password && touched.password ?
                <StyledForm.Text>
                  {errors.password}
                </StyledForm.Text>
              : null}
            </StyledForm.Group>
            <StyledButton variant={primary} type='submit'>Log in</StyledButton>
          </StyledForm>
        )}
      </Formik>
    </div>
  );
}