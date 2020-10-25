import React, {useContext} from 'react';
import data from "../data.json";
import {SideBarList} from "./SideBar.elements";
import {SideNavigationBarListItem} from "./SideNavigationBarListItem";
import {WeatherContext} from "../../Context/WeatherContext";

export const SideNavigationBarList = () => {
    const { weatherState } = useContext(WeatherContext);
    return (
        <SideBarList>
            {/*{*/}
            {/*    data.length > 1*/}
            {/*        ? data.map((weather, key)=>{*/}
            {/*            if (key < 7){*/}
            {/*                return (*/}
            {/*                    <SideNavigationBarListItem key={ weather.dt } weather={weather}/>*/}
            {/*                )}*/}
            {/*        })*/}
            {/*        : null*/}
            {/*}*/}
            {
                weatherState.weather.length > 1
                    ? weatherState.weather.map((weather, key)=>{
                        if (key < 7){
                            return (
                                <SideNavigationBarListItem key={ weather.dt } weather={weather}/>
                            )}
                    })
                    : null
            }
        </SideBarList>
    );
};
