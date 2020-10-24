import styled from 'styled-components';


export const WeatherDetailSection = styled.div`
background-color: ${ props => props.theme["DarkText"] };
flex: 1;
opacity: .2;
margin: 3rem;
`

export const WeatherDetailHeading = styled.div`
display: flex;
justify-content: space-around;
`;

export const WeatherDetailHeadingTempBox = styled.div`
display: flex;
justify-content: space-between;
`;