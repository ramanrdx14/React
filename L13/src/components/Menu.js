import React, { useContext, useEffect, useState } from "react";
import ShimmerCards from "./Shimmer";
import { useParams } from "react-router-dom";
import useResCustom from "../utils/useResCustom";
import ResCatagory from "./ResCatagory";
import UserContext from "../utils/UserContext";
  const Menu = () => {
  const { id } = useParams();
  const menuItems = useResCustom(); // Custom Hook
  const [showIndex,setShowIndex] = useState(null);
  
  if (Object.keys(menuItems).length === 0) {
    return <ShimmerCards />;
  }

  return (
    <div className="bg-black min-h-screen text-white text-center font-sans  overflow-hidden">
      <h2 className="font-bold text-lg text-yellow-500">{menuItems[id]?.name}</h2>
      <ul keys={menuItems[id]}>
        {menuItems[id]?.dishes.map((category, i) => {// Extract the category name (veg, nonveg, etc.)
            const[c,d] = Object.entries(category)[0];
            return <UserContext.Provider value={{setShowIndex:setShowIndex}}><ResCatagory category={c} data={d} showItems={i===showIndex?true:false} setShowIndex={()=>{setShowIndex(i)}}></ResCatagory></UserContext.Provider>
        })}
      </ul>
    </div>
  );
};

export default Menu;
//<li key={i * 78}>{dishList}</li>;