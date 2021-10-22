import { StyledToast, StyledToastContainer } from 'styled-components/Toast';

export default function MessageToast({show, message, type, onClose}) {
  return (
    <StyledToastContainer position='bottom-left'>
      <StyledToast show={show} onClose={()=> onClose(false)} autohide>
        <StyledToast.Header>
          <strong className="me-auto">{type}</strong>
        </StyledToast.Header>
        <StyledToast.Body>{message}</StyledToast.Body>
      </StyledToast>
    </StyledToastContainer>
  );
}