import styled ,{createGlobalStyle, keyframes} from "styled-components";

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

const infiniteRotate = keyframes`
0%{
transform: rotate(0deg);
}
100%{
transform: rotate(-360deg);
}
`;

export const Center = styled.div`
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
animation: ${ infiniteRotate } linear 1s infinite;
`;

