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

export const SideBarListItemTemp = styled.div`
font-size: 2rem;
height: 4rem;

`


export const IconWrapper = styled.div`
.svg{
width: 3.2rem;
height: 3.2rem;
fill: ${ props => props.theme["LightText"]};
}
`;

export const SideBarListItemIcon = styled.div`

`