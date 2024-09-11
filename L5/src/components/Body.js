import Card from "./Card";
import React from "react";
import { data } from "../utils/dumpdata";
import { useState } from "react";
const Body = ()=>{
    const [magicdata,setFilterData] = useState(data);
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

