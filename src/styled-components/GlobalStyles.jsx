import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
    ${'' /* background: ${props => props.theme.black};
    color: ${props => props.theme.white}; */}
    .material-icons {
      font-family: 'Material Icons';
      color: ${props => props.theme.black};
      font-weight: normal;
      font-style: normal;
      font-size: 24px;  /* Preferred icon size */
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
  ${'' /* h1, h2, h3, h4, h5, h6, p, a {
    margin: 0;
    padding: 0;
    font-weight: inherit;
    font-style: inherit;
  } */}
`;

export const theme = {
  white: '#F5F3F4',
  grey: '#D3D3D3',
  greyD: '#B1A7A6',
  main: '#BA181B',
  mainS: '#A4161A',
  mainL: '#E5383B',
  mainD: '#660708',
  blackL: '#161A1D',
  black: '#0B090A',
  states: {
    danger: '#D11A2A'
  }
}