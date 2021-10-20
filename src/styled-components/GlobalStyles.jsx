import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
    background: ${props => props.theme.darkShades};
    .material-icons {
      font-family: 'Material Icons';
      font-weight: normal;
      font-style: normal;
      font-size: 24px;
      display: inline-block;
      line-height: 1;
      text-transform: none;
      letter-spacing: normal;
      word-wrap: normal;
      white-space: nowrap;
      direction: ltr;

      /* Support for all WebKit browsers. */
      -webkit-font-smoothing: antialiased;
      /* Support for Safari and Chrome. */
      text-rendering: optimizeLegibility;

      /* Support for Firefox. */
      -moz-osx-font-smoothing: grayscale;

      /* Support for IE. */
      font-feature-settings: 'liga';
    }
  }
  *,
  :after,
  :before {
    box-sizing: border-box;
  }
`;

export const newTheme = {
  main: 'rgb(186, 24, 27)',
  darkShades: 'rgb(22, 21, 28)',
  darkShadesTransparent: 'rgba(22, 21, 28, .6)',
  darkAccent: 'rgb(131, 124, 148)',
  lightShades: 'rgb(139, 134, 136)',
  lightAccent: 'rgb(242, 247, 248)',
  states: {
    default: '#999999',
    primary: 'rgb(186, 24, 27)',
    info: 'rgb(8, 8, 9)',
    success: 'rgb(109, 130, 64)',
    warning: 'rgb(234, 114, 8)',
    danger: 'rgb(244, 67, 54)'
  }
}