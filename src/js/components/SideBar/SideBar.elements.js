import styled from "styled-components";

export const SideBar = styled.nav`
background-image: linear-gradient( to top, #44352B, #8D908A);
opacity: .8;
flex: 0 0 20%;

`

export const SideBarList = styled.div`
padding: 1rem;

`;

export const SideBarListItem = styled.div`
color: ${ props => props.theme["LightText"]};
display: flex;
justify-content: space-between;
padding: .8rem 1rem;
position: relative;
transition: all .3s;
cursor: pointer;
&:not(:last-child){
border-bottom: 1px ${ props => props.theme["LightText"]} solid;
}
&:hover{
background-color: ${ props => props.theme["DarkText"]} ;
}
`

export const SideBarListItemLeft = styled.div`
display: flex;
align-items: center;
`

export const SideBarListItemDate = styled.div`
font-size: 2.2rem;
`

export const SideBarListItemRight = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
`


export const Temp = styled.div`
font-size: ${ props => props.size ? props.size : '2rem'};
height: ${ props => props.height && props.height };
color: ${ props => props.theme['LightText']};
padding: .5rem;
backface-visibility: hidden;
transition: all .2s ;
&:hover{
transform: rotate(-2deg) scale(1.1);
}
`


export const IconWrapper = styled.div`
.svg{
transition: all .5s;
opacity: 1;
width: ${ props => props.size ? props.size : '3.2rem' };
height: ${ props => props.size ? props.size : '3.2rem' };
fill: ${ props => props.color ? props.color : props.theme["LightText"]};
transform: ${ props => props.deg && `rotate(${ props.deg }deg)`};
}
`;

export const SideBarListItemIcon = styled.div`

`