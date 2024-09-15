import Card from "./Card";
import React, { useEffect } from "react";
import { data } from "../utils/dumpdata";
import { useState } from "react";
import ShimmerCards from "./Shimmer";
const Body = ()=>{
    const [magicdata,setFilterData] = useState([]);
    const [filterdRest,setFilterRest] = useState([]);
    const [textSearch,setTextSearch] = useState("");
    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async ()=>{
        //const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.510268&lng=87.355775&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        //const json = await data.json();
        const mydata = await data();
        setFilterData(mydata);
        setFilterRest(mydata);
    }
    if(magicdata.length === 0){
        return <ShimmerCards></ShimmerCards>
    }
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={
                    async ()=>{
                        const mydata = await data();
                        const filterdata = mydata.filter((d)=>{
                            if(parseInt(d.rating)>=4)return true;
                            else return false;
                        })
                        setFilterRest(filterdata);
                    }
                }>Top Rated Restaurent</button>
                 <div className="Search">
                <input  className='search-input'  type="text" placeholder="Search Restaurant" value={textSearch} onChange={(e)=>setTextSearch(e.target.value)}></input>
                <button className='search-button' type="submit" onClick={()=>{

                    const searchRecords = magicdata.filter((data)=>{
                        return data.name.toLowerCase().includes(textSearch.toLowerCase());
                    })
                    setFilterRest(searchRecords);
                }}>Seach</button>
                </div>
            </div>
            <div className="cardbody">
            {   
                filterdRest.map(restaurent=><Card resdata={restaurent} key={restaurent.id}></Card>)
            }
            </div>
        </div>
    )
}
export default Body;

