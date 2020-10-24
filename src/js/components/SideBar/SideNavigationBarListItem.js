import React from 'react';
import {
    IconWrapper,
    SideBarListItem,
    SideBarListItemDate, SideBarListItemIcon,
    SideBarListItemLeft,
    SideBarListItemRight,
    SideBarListItemTemp
} from "./SideBar.elements";
import { WeatherForDay } from "../../models/WeatherForDay";





export const SideNavigationBarListItem = ({ weather }) => {

    const thisDay = new WeatherForDay(
        weather.dt,
        weather['temp'].min,
        weather['temp'].max,
        weather['weather'][0].description
    );

    return (
        <SideBarListItem>
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
