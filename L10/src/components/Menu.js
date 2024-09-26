import React, { useEffect, useState } from "react";
import ShimmerCards from "./Shimmer";
import { useParams } from "react-router-dom";
import useResCustom from "../utils/useResCustom";
const Menu = ()=>{
    const {id} = useParams();
    const menuItems   = useResCustom(); //Custom Hook
    if(Object.keys(menuItems).length === 0){
        return <ShimmerCards></ShimmerCards>
    }
    return (
        <div>
            <h2>Res Name :{menuItems[id]?.name}</h2>
            <ul>
                {
                    menuItems[id]?.dishes.map((e,i)=>{
                        return <li key={i*37}>{e.name}&nbsp;&nbsp;{e.price}</li>
                    })
                }
            </ul>
        </div>
    );
}
export default Menu;