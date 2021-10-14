import styled from 'styled-components';
import Form from 'react-bootstrap/Form';

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  & .form-group {
    display: flex;
    flex-direction: column;
  }
`;

export default StyledForm;