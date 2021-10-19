import styled from 'styled-components';
import Form from 'react-bootstrap/Form';

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  & .form-group {
    display: flex;
    flex-direction: column;
  }
  & .form-control {
    border-radius: 0px;
  }
`;

export const SearchForm = styled(StyledForm)`
  .searchInput {
    display: flex;
    flex-direction: row;
    button {
      height: auto;
      padding: .3rem .5rem;
    }
  }
`;

export default StyledForm;