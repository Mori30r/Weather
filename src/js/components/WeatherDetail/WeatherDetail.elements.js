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
display: flex;
align-items: center;
justify-content: space-between;
flex: 0 0 35%;
`;

export const WeatherDetailSecond = styled.div`
margin: 2rem;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-around;
`;

export const WeatherDetailSecondTempBox = styled.div`

`;

export const WeatherDetailSecondFeelsLikeBox = styled.div`
padding: 2rem 0;
`;