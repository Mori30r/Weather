import React, {useContext} from 'react';
import {
    WeatherDetailHeader,
    WeatherDetailHeading,
    WeatherDetailHeadingTempBox, WeatherDetailHeadingWind,
    WeatherDetailSection
} from "./WeatherDetail.elements";
import {WeatherContext} from "../../Context/WeatherContext";
import data from '../data.json';
import {WeatherForDay} from "../../models/WeatherForDay";
import {IconWrapper, Temp} from "../SideBar/SideBar.elements";

export const WeatherDetail = () => {
    const { weatherState } = useContext(WeatherContext);
    // const activatedDayWeather = weatherState.weather.find((obj)=> obj.dt === weatherState.active)
    const activatedDayWeather = data.find((obj)=> obj.dt === weatherState.active);
    console.log(activatedDayWeather)
    const thisDay = new WeatherForDay(
        activatedDayWeather.dt,
        activatedDayWeather['temp'].min,
        activatedDayWeather['temp'].max,
        activatedDayWeather['weather'][0].description
    );
    return (
        <WeatherDetailSection>
            <WeatherDetailHeading>
                <WeatherDetailHeadingTempBox>
                    <IconWrapper color={'white'} size={'10rem'} >
                        { thisDay.icon }
                    </IconWrapper>
                    <Temp size={'3.2rem'}>
                        { thisDay.temp } &deg; C
                    </Temp>
                </WeatherDetailHeadingTempBox>
                <WeatherDetailHeader>
                    { thisDay.day }
                </WeatherDetailHeader>
                <WeatherDetailHeadingWind>

                </WeatherDetailHeadingWind>
            </WeatherDetailHeading>

        </WeatherDetailSection>
    );
};
