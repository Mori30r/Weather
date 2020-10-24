import React, {useContext} from 'react';
import {
    IconWrapper,
    SideBarListItem,
    SideBarListItemDate, SideBarListItemIcon,
    SideBarListItemLeft,
    SideBarListItemRight,
    SideBarListItemTemp
} from "./SideBar.elements";
import { WeatherForDay } from "../../models/WeatherForDay";
import {WeatherContext} from "../../Context/WeatherContext";

export const SideNavigationBarListItem = ({ weather }) => {
    const { weatherDispatch } = useContext(WeatherContext);
    const thisDay = new WeatherForDay(
        weather.dt,
        weather['temp'].min,
        weather['temp'].max,
        weather['weather'][0].description
    );

    return (
        <SideBarListItem onClick={e => weatherDispatch({ type: 'SET_ACTIVE', active: thisDay.day }) }>
            <SideBarListItemLeft>
                <SideBarListItemDate>{thisDay.day}</SideBarListItemDate>
            </SideBarListItemLeft>
            <SideBarListItemRight>
                <SideBarListItemTemp>{thisDay.temp} &deg; C</SideBarListItemTemp>
                <SideBarListItemIcon>
                    <IconWrapper>
                        {thisDay.icon}
                    </IconWrapper>
                </SideBarListItemIcon>
            </SideBarListItemRight>
        </SideBarListItem>
    );
};
