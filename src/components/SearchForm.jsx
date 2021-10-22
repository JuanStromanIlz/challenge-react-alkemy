import { useHistory } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { SearchForm as StyledForm } from 'styled-components/Form';
import { StyledButton, def } from 'styled-components/Button';

const SearchSchema = Yup.object().shape({
  query: Yup.string().required(),
});

export default function SearchForm() {

  let history = useHistory();

  function searchHero(values) {
    let newSearch = values.query;
    history.push(`/search?query=${newSearch}`);
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
          <StyledForm as={Form} autoComplete="off">
            <div className='searchInput'>
              <StyledForm.Control as={Field} name='query' size='sm' placeholder={errors.query && touched.query ? 'Type something' : 'Search a hero'} />
              <StyledButton className='material-icons' variant={def} type='submit'>search</StyledButton>
            </div>
          </StyledForm>
        )}
      </Formik>
    </div>
  );
}