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
    box-shadow: inherit;
    background: ${props => props.theme.darkShadesTransparent};
    color: #fff;
    :focus {
      border-bottom: 1px solid ${props => props.theme.lightAccent};
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
      box-shadow: inherit;
      background: ${props => props.theme.darkShadesTransparent};
      :focus, :hover {
        ${'' /* background: ${props => props.theme.lightAccent}; */}
        color: ${props => props.theme.main};
      }
    }
  }
  :focus-within {
    border-bottom: 1px solid ${props => props.theme.lightAccent};
    .form-control {
      border: inherit;
    }
  }
`;

export default StyledForm;