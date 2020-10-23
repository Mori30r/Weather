import React, {useState} from 'react';
import styled from 'styled-components';
import Mp4 from "../../assets/videos/back.mp4"
import Webm from "../../assets/videos/back.webm"
import {ReactComponent as ClearSky} from "../../assets/icons/Weather/weather_sun.svg";
import {ReactComponent as WeatherCloud} from "../../assets/icons/Weather/weather_cloud.svg";
import {ReactComponent as VariableSun} from "../../assets/icons/Weather/weather_variable_sun.svg";
import {ReactComponent as ShowerRain} from "../../assets/icons/Weather/weather_rain.svg";
import {ReactComponent as Rain} from "../../assets/icons/Weather/weather_rain_sun.svg";
import {ReactComponent as Thunderstorm} from "../../assets/icons/Weather/weather_storm_sun.svg";
import {ReactComponent as Snow} from "../../assets/icons/Weather/weather_snow_sun.svg";
import {ReactComponent as Mist} from "../../assets/icons/Weather/weather_fog_sun.svg";


import publicIp from "public-ip";
import dayjs from "dayjs";
import data from './data.json';

const Main = styled.div`
background-color: ${ props => props.theme["DarkBack"]};
`;


const Background = styled.div`
height: 100vh;
display: flex;
`;

const Video = styled.video`
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
object-fit: contain;
`

const Section = styled.div`
width: 100%;
z-index: 1;
display: flex;
justify-content: start;
`;

const SideBar = styled.nav`
background-image: linear-gradient( to top, #44352B, #8D908A);
opacity: .8;
flex: 0 0 20%;

`

const SideBarList = styled.div`
padding: 1rem;

`;

const SideBarListItem = styled.div`
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

const SideBarListItemLeft = styled.div`
display: flex;
align-items: center;
`

const SideBarListItemDate = styled.div`
font-size: 2.2rem;
`

const SideBarListItemRight = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
`

const SideBarListItemTemp = styled.div`
font-size: 2rem;
height: 4rem;

`


const IconWrapper = styled.div`
.svg{
width: 3.2rem;
height: 3.2rem;
fill: ${ props => props.theme["LightText"]};
}
`;

const SideBarListItemIcon = styled.div`

`



export const WeatherApp = () => {

    let getCityUrl;
    let getWeatherUrl;
    const [weather, setWeather] = useState([]);
    const [error, setError] = useState('');

    const getIp = () => {
        return publicIp.v4();
    }


    // useEffect( ()=>{
    //     getIp().then( (r)=>{
    //         getCityUrl = `http://api.ipstack.com/${r}?access_key=94d09010ee5d3975487b51e26f3a1ee4`;
    //         axios.get(getCityUrl).then((r)=> {
    //             getWeatherUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${r.data["latitude"]}&lon=${r.data["longitude"]}&appid=1b6866d9113d620d6c30d25e3b474830`
    //             axios.get(getWeatherUrl).then((r)=>{
    //                 setWeather(r.data['daily']);
    //             }).catch(e => setError(e));
    //         })
    //     });
    //  }, []);

    const unixToDay = (unix) => {
        const week = {
            0: 'Sun',
            1: 'Mon',
            2: 'Tue',
            3: 'Wed',
            4: 'Thu',
            5: 'Fri',
            6: 'Sat',
        }
        const date = dayjs.unix(unix);
        return week[date['$W']];
    }

    const kToC = (k) => {
        return k - 273.15;
    }

    const averageTemp = (min, max) => {
        return Math.round(kToC((max + min) / 2));
    }

    const iconChoice = (mood) => {
        const icons = {
            'clear sky': <ClearSky className="svg"/>,
            'few clouds': <VariableSun className="svg"/>,
            'scattered clouds': <WeatherCloud className="svg"/>,
            'broken clouds': <WeatherCloud className="svg"/>,
            'shower rain': <ShowerRain className="svg"/>,
            'rain': <Rain className="svg"/>,
            'thunderstorm': <Thunderstorm className="svg"/>,
            'snow': <Snow className="svg"/>,
            'mist': <Mist className="svg"/>
        };
        console.log(icons[mood])
        return icons[mood];
    }


    return (
        <Main>
            <Background>
                <Video autoPlay muted loop >
                    <source src={Mp4} type="video/mp4"/>
                    <source src={Webm} type="video/webm"/>
                    Your Browser Are Not Supported !!!
                </Video>
                <Section>
                    <SideBar>
                        <SideBarList>
                            {
                                data.length > 1
                                ? data.map((day, key)=>{
                                    if (key < 7){
                                        return (
                                            <SideBarListItem key={ day.dt }>
                                                <SideBarListItemLeft>
                                                    <SideBarListItemDate>{unixToDay(day.dt)}</SideBarListItemDate>
                                                </SideBarListItemLeft>
                                                <SideBarListItemRight>
                                                    <SideBarListItemTemp>{averageTemp(day['temp'].max, day['temp'].min)} &deg; C</SideBarListItemTemp>
                                                    <SideBarListItemIcon>
                                                        <IconWrapper>
                                                            {iconChoice(day['weather'][0].description)}
                                                        </IconWrapper>
                                                    </SideBarListItemIcon>
                                                </SideBarListItemRight>
                                            </SideBarListItem>
                                        )}
                                    })
                                    : null
                            }
                        </SideBarList>
                    </SideBar>
                </Section>
            </Background>
        </Main>
    );
};
