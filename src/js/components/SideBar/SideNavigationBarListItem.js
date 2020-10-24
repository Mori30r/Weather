import React from 'react';
import {
    IconWrapper,
    SideBarListItem,
    SideBarListItemDate, SideBarListItemIcon,
    SideBarListItemLeft,
    SideBarListItemRight,
    SideBarListItemTemp
} from "./SideBar.elements";
import dayjs from "dayjs";
import {ReactComponent as ClearSky} from "../../../assets/icons/Weather/weather_sun.svg";
import {ReactComponent as VariableSun} from "../../../assets/icons/Weather/weather_variable_sun.svg";
import {ReactComponent as WeatherCloud} from "../../../assets/icons/Weather/weather_cloud.svg";
import {ReactComponent as ShowerRain} from "../../../assets/icons/Weather/weather_rain.svg";
import {ReactComponent as Rain} from "../../../assets/icons/Weather/weather_rain_sun.svg";
import {ReactComponent as Thunderstorm} from "../../../assets/icons/Weather/weather_storm_sun.svg";
import {ReactComponent as Snow} from "../../../assets/icons/Weather/weather_snow_sun.svg";
import {ReactComponent as Mist} from "../../../assets/icons/Weather/weather_fog_sun.svg";


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
    return icons[mood];
}


export const SideNavigationBarListItem = ({ day }) => {
    return (
        <SideBarListItem>
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
    );
};
