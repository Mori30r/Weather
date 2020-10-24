import styled from 'styled-components';


export const WeatherDetailSection = styled.div`
background-image: linear-gradient(to left top, rgba( 100, 100, 100, .2 ), rgba( 0, 0, 0, .5 ) );
box-shadow: 0 1rem 4rem rgba(0, 0, 0, .6);
flex: 1;
opacity: 1;
margin: 3rem;
`

export const WeatherDetailHeading = styled.div`
padding: 2rem;
display: flex;
justify-content: space-between;
`;

export const WeatherDetailHeadingTempBox = styled.div`
display: flex;
justify-content: space-between;
width: 25%;
align-items: center;
`;

export const WeatherDetailHeader = styled.h2`
color: ${ props => props.theme["LightText"]};
font-size: 4rem;
display: flex;
justify-content: center;
`

export const WeatherDetailHeadingWind = styled.div`

`;