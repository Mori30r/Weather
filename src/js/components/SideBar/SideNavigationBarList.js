import React from 'react';
import data from "../data.json";
import {SideBarList} from "./SideBar.elements";
import {SideNavigationBarListItem} from "./SideNavigationBarListItem";

export const SideNavigationBarList = () => {
    return (
        <SideBarList>
            {
                data.length > 1
                    ? data.map((day, key)=>{
                        if (key < 7){
                            return (
                                <SideNavigationBarListItem key={ day.dt } day={day}/>
                            )}
                    })
                    : null
            }
        </SideBarList>
    );
};
