import {useHistory} from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { SearchForm as StyledForm } from 'styled-components/Form';
import { StyledButton, primary } from 'styled-components/Button';

const SearchSchema = Yup.object().shape({
  query: Yup.string().required(),
});

export default function SearchForm() {

  let history = useHistory();

  function searchHero(values) {
    history.push(`/search?query=${values.query}`);
  }

  return (
    <div>
      <Formik
        initialValues={{
          query: '',
        }}
        validationSchema={SearchSchema}
        onSubmit={searchHero}
      >
        {({ errors, touched }) => (
          <StyledForm as={Form}>
            <div className='searchInput'>
              <StyledForm.Control as={Field} name='query' size='sm' placeholder={errors.query && touched.query ? 'Type something' : 'Search a hero'} />
              <StyledButton className='material-icons' variant={primary} type='submit'>search</StyledButton>
            </div>
          </StyledForm>
        )}
      </Formik>
    </div>
  );
}