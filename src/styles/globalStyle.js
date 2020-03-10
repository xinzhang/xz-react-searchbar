import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
html,
body {
  height: 100%;
}
  body {
    color: ${(props) => (props.whiteColor ? 'white' : 'black')};
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    background-image: ${(props) => props.theme.backgroundGradient};
  }
`;
