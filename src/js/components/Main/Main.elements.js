import styled from "styled-components";

export const Main = styled.div`
background-color: ${ props => props.theme["DarkBack"]};
`;


export const Background = styled.div`
height: 100vh;
display: flex;
`;

export const Video = styled.video`
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
object-fit: contain;
`

export const Section = styled.div`
width: 100%;
z-index: 1;
display: flex;
justify-content: start;
`;