import React from "react";
import { menu } from "./dumpdata";
import { useState,useEffect } from "react";
const useResCustom = ()=>{
    const [menuItems,setMenuItems] = useState({});
    useEffect(()=>{
        getAllMenuItems();
    },[]);
    const getAllMenuItems = async ()=>{
        //iske gagah fetch bhi likh sakte hai abhi keliye hum dummy api use krrahe hai 
        const jsondata = await menu();
        setMenuItems(jsondata);
    }
    return menuItems;
}

export default useResCustom;