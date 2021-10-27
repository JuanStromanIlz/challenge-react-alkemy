import styled from 'styled-components';
import Form from 'react-bootstrap/Form';

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  & .form-text {
    padding-left: 0.75rem;
    color: ${props => props.theme.states.warning};
  }
  & .form-label {
    color: ${props => props.theme.lightAccent};
    padding-left: 0.75rem;
  }
  & .form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 1.75rem;
  }
  & .form-control {
    border-radius: 0px;
    border: inherit;
    box-shadow: inherit;
    background: ${props => props.theme.darkShadesTransparent};
    border-bottom: 1px solid ${props => props.theme.lightAccent};
    color: #fff;
    ::placeholder {
      color: ${props => props.theme.lightAccent};
    }
  }
  button {
    width: fit-content;
    margin: auto;
  }
`;

export const SearchForm = styled(StyledForm)`
  .searchInput {
    display: flex;
    flex-direction: row;
    button {
      height: auto;
      padding: .3rem .5rem;
      box-shadow: inherit;
      background: ${props => props.theme.darkShadesTransparent};
      :focus, :hover {
        color: ${props => props.theme.main};
      }
    }
    .form-control {
      border: inherit;
    }
  }
  :focus-within {
    border-bottom: 1px solid ${props => props.theme.lightAccent};
  }
`;

export default StyledForm;