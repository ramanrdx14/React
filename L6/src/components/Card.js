import React from "react";
const Card = (resdata)=>{
    const {name,cuisine,image,distance,rating} = resdata.resdata;
    return (
        <div className="card">
            <img src={image}></img>
            <div>{name}</div>
            <div>{cuisine}</div>
            <div>{rating} stars</div>
            <div>{distance} kilometers</div>
        </div>
    )
}
export default Card;