import React, {useContext} from 'react';
import {
    WeatherDetailHeader,
    WeatherDetailHeading,
    WeatherDetailHeadingTempBox, WeatherDetailHeadingWind, WeatherDetailSecond, WeatherDetailSecondTempBox,
    WeatherDetailSection
} from "./WeatherDetail.elements";
import { ReactComponent as WindSpeed } from "./../../../assets/icons/Weather/weather_windgust.svg";
import {WeatherContext} from "../../Context/WeatherContext";
import data from '../data.json';
import {WeatherForDay} from "../../models/WeatherForDay";
import {IconWrapper, Temp} from "../SideBar/SideBar.elements";
import { kToC } from "../../models/WeatherForDay";

export const WeatherDetail = () => {
    const { weatherState } = useContext(WeatherContext);
    // const activatedDayWeather = weatherState.weather.find((obj)=> obj.dt === weatherState.active)
    const activatedDayWeather = data.find((obj)=> obj.dt === weatherState.active);
    console.log(activatedDayWeather)
    const thisDay = new WeatherForDay(
        activatedDayWeather.dt,
        activatedDayWeather['temp'].min,
        activatedDayWeather['temp'].max,
        activatedDayWeather['weather'][0].description,
        activatedDayWeather["wind_speed"],
        activatedDayWeather["temp"]
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
                    <IconWrapper color={'white'} size={'5rem'}>
                        <WindSpeed className={'svg'}/>
                    </IconWrapper>
                    <Temp>
                        { `Wind Speed: ${thisDay.windSpeed} M/S` }
                    </Temp>
                </WeatherDetailHeadingWind>
            </WeatherDetailHeading>
            <WeatherDetailSecond>
                <WeatherDetailSecondTempBox>
                    <Temp size={'2.2rem'}>
                        Temperature:
                        <br/>
                        <br/>
                    </Temp>
                    <Temp size={'2.2rem'}>
                        { `Day: ${kToC(thisDay.dayTemp["day"])}`} &deg; C
                    </Temp>
                    <Temp size={'2.2rem'}>
                        { `Evening: ${kToC(thisDay.dayTemp["eve"])}`} &deg; C
                    </Temp>
                    <Temp size={'2.2rem'}>
                        { `Night: ${kToC(thisDay.dayTemp["night"])}`} &deg; C
                    </Temp>
                </WeatherDetailSecondTempBox>
            </WeatherDetailSecond>
        </WeatherDetailSection>
    );
};
