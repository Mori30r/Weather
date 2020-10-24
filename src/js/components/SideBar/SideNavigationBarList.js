import React from 'react';
import data from "../data.json";
import {SideBarList} from "./SideBar.elements";
import {SideNavigationBarListItem} from "./SideNavigationBarListItem";

export const SideNavigationBarList = () => {
    return (
        <SideBarList>
            {
                data.length > 1
                    ? data.map((weather, key)=>{
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
