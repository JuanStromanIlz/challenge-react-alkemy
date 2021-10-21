import { Formik, Form, Field } from 'formik';
import StyledForm from 'styled-components/Form';
import {StyledButton, def} from 'styled-components/Button';
import * as Yup from 'yup';

const LogInSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required'),
});


export default function LoginForm({onSubmit}) {
  return (
    <div>
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        validationSchema={LogInSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <StyledForm as={Form}>
            <StyledForm.Group>
              <StyledForm.Label>Email</StyledForm.Label>
              <StyledForm.Control as={Field} name='email' type='email' placeholder='Enter email' />
              {errors.email && touched.email ?
                <StyledForm.Text className='text-muted'>
                  {errors.email}
                </StyledForm.Text>
              : null}
            </StyledForm.Group>
            <StyledForm.Group>
              <StyledForm.Label>Password</StyledForm.Label>
              <StyledForm.Control as={Field} name='password' type='password' placeholder='Enter password' />
              {errors.password && touched.password ?
                <StyledForm.Text className='text-muted'>
                  {errors.password}
                </StyledForm.Text>
              : null}
            </StyledForm.Group>
            <StyledButton variant={def} type='submit'>Submit</StyledButton>
          </StyledForm>
        )}
      </Formik>
    </div>
  );
}