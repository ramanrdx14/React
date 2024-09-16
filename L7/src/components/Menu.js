import React, { useEffect, useState } from "react";
import { menu } from "../utils/dumpdata";
import ShimmerCards from "./Shimmer";
import { useParams } from "react-router-dom";
const Menu = ()=>{
    const {id} = useParams();
    const [menuItems,setMenuItems] = useState({});
    useEffect(()=>{
        getAllMenuItems();
    },[]);

    const getAllMenuItems = async ()=>{
        //iske gagah fetch bhi likh sakte hai abhi keliye hum dummy api use krrahe hai 
        const jsondata = await menu();
        setMenuItems(jsondata);
    }
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