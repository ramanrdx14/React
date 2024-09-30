import React from "react";
const ResList = (props)=>{
    return(
        <div className="flex flex-col">
            {
                props.data.map((items)=>{
                    return <div className="my-4">
                        <div className="flex flex-col gap:10 sm:flex-row md:flex-row lg:flex-row xl:flex-row items-center justify-between sm:gap-10 lg:gap-10 md:gap-10 xl:gp-10">
                        <div><img src={items.image} className="h-14 rounded-lg"></img></div>
                        <div>{items.name}</div>
                        <div>₹{items.price}</div>
                        <div>{items.rating}⭐</div>
                        <div>Orders:{items.orderCount}</div>
                        <button className="py-2 px-8 border-2 border-white rounded-lg hover:bg-green-400 transition ease-in-out delay-150 hover:text-black">Add</button>
                        </div>
                    </div>
                })
            }
        </div>
    );
}
export default ResList