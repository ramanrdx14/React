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
                <div>{rating}⭐</div>
                <div>{distance} kilometers</div>
            </div>
            </div>
        </div>
    )
}

export const CardsWithPermoted = (Card)=>{
    return (props)=>{
        return (
            <div>
                <label className="absolute text-yellow-300 font-bold mx-1" style={{ fontSize: '10px',letterSpacing:'2px'}}>Permoted</label>
                <Card {...props}></Card>
            </div>
        );
    }
}
export default Card;