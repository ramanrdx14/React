import React from "react";
import { useRouteError } from "react-router-dom";
const Error = ()=>{
    const err = useRouteError();
    return (
        <div>
            <h2>Opps Something Went Wrong !!</h2>
            <h3>Opps Something Went Wrong !!</h3>
            <h4>{err.statusText}</h4>
        </div>
    );
}
export default Error;