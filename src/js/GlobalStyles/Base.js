import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
*::before,
*,
*::after{
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html{
  font-size:62.5% ;
}

body{
  font-family: "Open Sans", sans-serif;
  box-sizing: border-box;
}
`