import Card from "./Card";
import React, { useEffect } from "react";
import { data } from "../utils/dumpdata";
import { useState } from "react";
import ShimmerCards from "./Shimmer";
const Body = ()=>{
    const [magicdata,setFilterData] = useState([]);
    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async ()=>{
        //const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.510268&lng=87.355775&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        //const json = await data.json();
        const mydata = await data();
        setFilterData(mydata);
    }
    if(magicdata.length === 0){
        return <ShimmerCards></ShimmerCards>
    }
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={
                    ()=>{
                        const filterdata = data.filter((d)=>{
                            if(parseInt(d.rating)>=4)return true;
                            else return false;
                        })
                        console.log(filterdata);
                        setFilterData(filterdata);
                    }
                }>Top Rated Restaurent</button>
            </div>
            <div className="cardbody">
            {   
                magicdata.map(restaurent=><Card resdata={restaurent}></Card>)
            }
            </div>
        </div>
    )
}
export default Body;

