import Card from "./Card";
import React, { useEffect } from "react";
import { data } from "../utils/dumpdata";
import { Link } from "react-router-dom";
import { useState } from "react";
import ShimmerCards from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = ()=>{
    const [magicdata,setFilterData] = useState([]);
    const [filterdRest,setFilterRest] = useState([]);
    const [textSearch,setTextSearch] = useState("");
    let status = useOnlineStatus();
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
    if(status===false){
        return <h1>You are Offline Please Check Your Internet</h1>
     }
    return (
        <div className="my-5">
            <div className="flex flex-col justify-centers items-center gap-5 sm:flex-row sm:justify-center sm:items-center md:flex-row md:justify-center md:items-center lg:flex-row lg:justify-center lg:items-center">
                <button className="py-2 px-2 rounded-md bg-black text-white font-sans font-medium" onClick={
                    async ()=>{
                        const mydata = await data();
                        const filterdata = mydata.filter((d)=>{
                            if(parseInt(d.rating)>=4)return true;
                            else return false;
                        })
                        setFilterRest(filterdata);
                    }
                }>Top Rated Restaurent</button>
                 <div className="">
                <input  className='py-2 px-2 rounded-md  text-black font-sans font-medium border-2 border-black'  type="text" placeholder="Search Restaurant" value={textSearch} onChange={(e)=>setTextSearch(e.target.value)}></input>
                <button className='py-2 px-5 rounded-md text-black font-sans font-medium border-2  border-black mx-5' type="submit" onClick={()=>{

                    const searchRecords = magicdata.filter((data)=>{
                        return data.name.toLowerCase().includes(textSearch.toLowerCase());
                    })
                    setFilterRest(searchRecords);
                }}>Seach</button>
                </div>
            </div>
            <div className="flex flex-wrap gap-10 justify-evenly my-5">
            {   
                
                filterdRest.map((restaurent)=>{
                return <Link key={restaurent.id} to={"/restaurant/"+restaurent.id}><Card resdata={restaurent}></Card></Link>
                })
            }
            </div>
        </div>
    )
}
export default Body;

