import styled from 'styled-components';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

export const StyledToastContainer = styled(ToastContainer)`
  position: fixed !important;
  left: 12px;
  bottom: 24px;
`;

export const StyledToast = styled(Toast)`
  background: ${props => props.theme.lightAccent};
`;