import { StyledToast, StyledToastContainer } from 'styled-components/Toast';

export default function MessageToast({show, message, type, onClose}) {
  return (
    <StyledToastContainer position='bottom-left'>
      <StyledToast show={show} variant={type} onClose={()=> onClose(false)}>
        <StyledToast.Header>
          <strong className="me-auto">{type.name}</strong>
        </StyledToast.Header>
        <StyledToast.Body>{message}</StyledToast.Body>
      </StyledToast>
    </StyledToastContainer>
  );
}