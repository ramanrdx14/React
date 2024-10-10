import React, { useContext, useState } from "react";
import ResList from "./ResList";
import UserContext from "../utils/UserContext";

const ResCatagory = (props)=>{
    const [getClickStatus,setClickedStatus] = useState(true);
    const userData = useContext(UserContext);
    return (
        <div className="flex justify-center items-center my-10 cursor-pointer flex-col">
            <div className="w-4/5 sm:w-1/2 md:w-1/2 lg:1/2  h-12 text-center shadow-lg bg-gray-900">
            <span className="px-5 font-bold font-sans tracking-wide">{props.category}({props.data.length})</span>
            <span onClick={()=>{

                //Modify showindex of the parent directly we cant but indirectly we can 
                getClickStatus===false?userData.setShowIndex(-1):props.setShowIndex();

                getClickStatus===true?setClickedStatus(false):setClickedStatus(true);
            }} className="hover:text-red-600 transition ease-in-out delay-75">Recommended ↑</span>
            </div>
            {props.showItems ? <ResList className="hidden" data={props.data}></ResList> : null}
        </div>
    )
}
export default ResCatagory;