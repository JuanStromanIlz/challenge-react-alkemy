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
    border: inherit;
    background: transparent;
    color: #fff;
    :focus {
      box-shadow: 0 2px 1px ${props => props.theme.lightAccent};
      box-shadow: inherit;
    }
    ::placeholder {
      color: ${props => props.theme.lightAccent};
    }
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