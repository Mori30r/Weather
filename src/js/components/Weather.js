import React, {useEffect} from 'react';
import styled from 'styled-components';
import Mp4 from "../../assets/videos/back.mp4"
import Webm from "../../assets/videos/back.webm"
import { ReactComponent as windiest } from "../../assets/icons/Weather/weather_downpour_sun.svg";
import publicIp from "public-ip";
import axios from "axios";

const Main = styled.div`
background-color: ${ props => props.theme["DarkBack"]};
`;

const Icon = styled(windiest)`
width: 4rem;
height: 4rem;
fill: ${ props => props.theme["LightText"]};
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
opacity: .8;
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
`

const SideBarListItemLeft = styled.div`
display: flex;
align-items: center;
`

const SideBarListItemDate = styled.div`
font-size: 3rem;

`

const SideBarListItemRight = styled.div`
padding: 1rem;
display: flex;
flex-direction: column;
justify-content: space-between;
`

const SideBarListItemTemp = styled.div`
font-size: 2.2rem;
height: 4rem;

`

const SideBarListItemIcon = styled.div`

`



export const WeatherApp = () => {

    let getCityUrl;
    let getWeatherUrl;


    const getIp = () => {
        return publicIp.v4();
    }
    useEffect( ()=>{
        getIp().then( (r)=>{
            getCityUrl = `http://api.ipstack.com/${r}?access_key=94d09010ee5d3975487b51e26f3a1ee4`;
            axios.get(getCityUrl).then((r)=> {
                console.log(r);
                getWeatherUrl = `api.openweathermap.org/data/2.5/forecast/daily?q=${r.data["city"]}&cnt=7&appid=a3c729972d8e3f6d5f9a97c6d3a43704`;
                axios.get(getWeatherUrl).then((r)=>{
                    console.log(r);
                }).catch(e => console.log(e))
            })
        });
     }, []);


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
                            <SideBarListItem>
                                <SideBarListItemLeft>
                                    <SideBarListItemDate>Thu</SideBarListItemDate>
                                </SideBarListItemLeft>
                                <SideBarListItemRight>
                                    <SideBarListItemTemp>23 &deg; C</SideBarListItemTemp>
                                    <SideBarListItemIcon><Icon/></SideBarListItemIcon>
                                </SideBarListItemRight>
                            </SideBarListItem>
                        </SideBarList>
                    </SideBar>
                </Section>
            </Background>
        </Main>
    );
};
