import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  *,
  :after,
  :before {
    box-sizing: border-box;
  }
  h1, h2, h3, h4, h5, h6, p, a {
    margin: 0;
    padding: 0;
    font-weight: inherit;
    font-style: inherit;
  }
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
  black: '#0B090A'
}