import React from 'react';
import Mp4 from "../../../assets/videos/back.mp4";
import Webm from "../../../assets/videos/back.webm";
import {Background, Main, Section, Video} from "./Main.elements";
import {SideNavigationBar} from "../SideBar/SideNavigationBar";
import {WeatherDetail} from "../WeatherDetail/WeatherDetail";

export const MainApp = () => {
    return (
        <Main>
            <Background>
                <Video autoPlay muted loop >
                    <source src={Mp4} type="video/mp4"/>
                    <source src={Webm} type="video/webm"/>
                    Your Browser Are Not Supported !!!
                </Video>
                <Section>
                    <SideNavigationBar/>
                    <WeatherDetail/>
                </Section>
            </Background>
        </Main>
    )
    ;
};
