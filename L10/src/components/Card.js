import React from "react";
const Card = (resdata)=>{
    const {name,cuisine,image,distance,rating} = resdata.resdata;
    return (
        <div className="w-52 flex justify-center items-center bg-black h-80 text-white">
            <div className="w-44  gap-5 h-72">
            <div>   
                <img src={image}></img>
            </div>
            <div>
                <div>{name}</div>
                <div>{cuisine}</div>
                <div>{rating} stars</div>
                <div>{distance} kilometers</div>
            </div>
            </div>
        </div>
    )
}
export default Card;