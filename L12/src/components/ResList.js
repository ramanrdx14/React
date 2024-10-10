import React from "react";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";
const ResList = (props)=>{
    const dispatch = useDispatch();
    return(
        <div className="flex flex-col">
            {
                props.data.map((items)=>{
                    return <div className="my-4">
                        <div className="flex flex-col gap:10 sm:flex-row md:flex-row lg:flex-row xl:flex-row items-center justify-between sm:gap-6 lg:gap-6 md:gap-6 xl:gap-6">
                        <div><img src={items.image} className="h-14 rounded-lg"></img></div>
                        <div>{items.name}</div>
                        <div>₹{items.price}</div>
                        <div>{items.rating}⭐</div>
                        <div>Orders:{items.orderCount}</div>
                        <button className="py-2 m-2 px-8 border-2 border-white rounded-lg hover:bg-green-400 transition ease-in-out delay-150 hover:text-black" onClick={()=> dispatch(addItem(items))}>Add</button>
                        <button className="py-2 m-2 px-8 border-2 border-white rounded-lg hover:bg-red-400 transition ease-in-out delay-150 hover:text-black" onClick={()=> dispatch(removeItem())}>Remove</button>
                        </div>
                    </div>
                })
            }
        </div>
    );
}
export default ResList