import {createGlobalStyle} from 'styled-components';


export const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

body {
  font-family: 'Open Sans Condensed', sans-serif;
  padding: 2rem 6rem;
  background-color: #e3e8ee;
  box-sizing: border-box;
  font-weight: 400;
  line-height: 1.7;
  
  @media screen and (max-width: 80rem){
  padding: 1rem;
  }
}

html {
  font-size: 62.5%;
}


a {
  text-decoration: none;
  color: #000000;
}
`;
