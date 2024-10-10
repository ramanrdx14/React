import React, { useState } from "react";
const User = ()=>{
    const [count1,setCount1] = useState();
    const [count2,setCount2] = useState();
    return (
        <div className="user-card">
            <h1>This is User</h1>
            <h2>This is User component</h2>
            <h2>This is count1 :{count1}</h2>
            <h2>This is count2 :{count2}</h2>
        </div>
    );
}
export default User;