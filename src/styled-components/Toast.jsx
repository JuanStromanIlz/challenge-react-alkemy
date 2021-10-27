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
  border-radius: 0px;
  .toast-header {
    color: ${props => props.variant.color};
  }
`;

/* Variants */

export const success = {
  name: 'Success',
  color: props => props.theme.states.success
};

export const alert = {
  name: 'Alert',
  color: props => props.theme.states.warning
};