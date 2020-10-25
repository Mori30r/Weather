import React, {useContext} from 'react';
import {
    WeatherDetailHeader,
    WeatherDetailHeading,
    WeatherDetailHeadingTempBox,
    WeatherDetailHeadingWind,
    WeatherDetailSecond,
    WeatherDetailSecondFeelsLikeBox,
    WeatherDetailSecondTempBox,
    WeatherDetailSection
} from "./WeatherDetail.elements";
import { ReactComponent as WindSpeed } from "./../../../assets/icons/Weather/weather_windgust.svg";
import { ReactComponent as WindDeg } from "./../../../assets/icons/Weather/weather_wind_N.svg";
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
        activatedDayWeather["temp"],
        activatedDayWeather["feels_like"],
        activatedDayWeather["pressure"],
        activatedDayWeather["humidity"],
        activatedDayWeather["clouds"],
        activatedDayWeather["wind_deg"]
    );
    return (
        <WeatherDetailSection>
            <WeatherDetailHeading>
                <WeatherDetailHeadingTempBox>
                    <IconWrapper color={'white'} size={'10rem'} >
                        { thisDay.icon }
                    </IconWrapper>
                    <Temp size={'1.8rem'}>
                       Average: { thisDay.temp } &deg; C
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
                    <IconWrapper color={'white'} size={'3rem'} deg={thisDay.windDeg} >
                        <WindDeg className={'svg'} />
                    </IconWrapper>
                </WeatherDetailHeadingWind>
            </WeatherDetailHeading>
            <WeatherDetailSecond>
                <WeatherDetailSecondTempBox>
                    <Temp size={'2.2rem'}>
                        Temperature:
                    </Temp>
                    <Temp size={'1.7rem'}>
                        { `Day: ${kToC(thisDay.dayTemp["day"])}`} &deg; C
                    </Temp>
                    <Temp size={'1.7rem'}>
                        { `Evening: ${kToC(thisDay.dayTemp["eve"])}`} &deg; C
                    </Temp>
                    <Temp size={'1.7rem'}>
                        { `Night: ${kToC(thisDay.dayTemp["night"])}`} &deg; C
                    </Temp>
                </WeatherDetailSecondTempBox>
                <WeatherDetailSecondFeelsLikeBox>
                    <Temp size={'2.2rem'}>
                        Feels Like:
                    </Temp>
                    <Temp size={'1.7rem'}>
                        { `Day: ${kToC(thisDay.feelsLike["day"])}`} &deg; C
                    </Temp>
                    <Temp size={'1.7rem'}>
                        { `Evening: ${kToC(thisDay.feelsLike["eve"])}`} &deg; C
                    </Temp>
                    <Temp size={'1.7rem'}>
                        { `Night: ${kToC(thisDay.feelsLike["night"])}`} &deg; C
                    </Temp>
                </WeatherDetailSecondFeelsLikeBox>
            </WeatherDetailSecond>
            <WeatherDetailSecond>
                <WeatherDetailSecondTempBox>
                    <Temp size={'1.7rem'}>
                        { `Humidity: ${thisDay.humidity}`} %
                    </Temp>
                    <Temp size={'1.7rem'}>
                        { `Clouds: ${thisDay.clouds}`} %
                    </Temp>
                </WeatherDetailSecondTempBox>
            </WeatherDetailSecond>
        </WeatherDetailSection>
    );
};
