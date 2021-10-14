import { Formik, Form, Field } from 'formik';
import StyledForm from 'styled-components/Form';
import Button from 'react-bootstrap/Button';
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
          <Form>
            <StyledForm>
              <StyledForm.Group>
                <StyledForm.Label>Email</StyledForm.Label>
                <Field name='email' type='email' placeholder='Enter email' />
                {errors.email && touched.email ?
                  <StyledForm.Text className='text-muted'>
                    {errors.email}
                  </StyledForm.Text>
                : null}
              </StyledForm.Group>
              <StyledForm.Group>
                <StyledForm.Label>Password</StyledForm.Label>
                <Field name='password' type='password' placeholder='Enter password' />
                {errors.password && touched.password ?
                  <StyledForm.Text className='text-muted'>
                    {errors.password}
                  </StyledForm.Text>
                : null}
              </StyledForm.Group>
              <Button type='submit'>Submit</Button>
            </StyledForm>
          </Form>
        )}
      </Formik>
    </div>
  );
}