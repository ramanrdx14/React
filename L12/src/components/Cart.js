import React, { useState } from "react";
import { useSelector } from "react-redux";
const Cart = ()=>{
    const cartItems = useSelector((store)=>store.cart.items);
    return(
        <div className="bg-black min-h-screen text-white text-center font-sans  overflow-hidden flex justify-center items-center">
            <div className="flex flex-col">
            {
                cartItems.map((items)=>{
                    return <div className="my-4">
                        <div className="flex flex-col gap:10 sm:flex-row md:flex-row lg:flex-row xl:flex-row items-center justify-between sm:gap-6 lg:gap-6 md:gap-6 xl:gap-6">
                        <div><img src={items.image} className="h-14 rounded-lg"></img></div>
                        <div>{items.name}</div>
                        <div>₹{items.price}</div>
                        <div>{items.rating}⭐</div>
                        </div>
                    </div>
                })
            }
          <div className="flex">
          <div style={{ visibility: cartItems.length === 0 ? "hidden" : "visible" }}
            > Total: ₹{cartItems.reduce((acc, item) => {
                return acc + parseInt(item.price);
                }, 0)}</div>
            </div>
            <div style={{ visibility: cartItems.length === 0 ? "hidden" : "visible" }} className="py-2 px-8 border-2 border-green-800 bg-green-900 ">Pay Now</div>
          </div>
        </div>
    );
}

export default Cart;