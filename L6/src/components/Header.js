import React, { useState } from "react";
import { image_LOGO } from "../utils/constants";
const Header = ()=>{
    const [initialStatus,changeLoginStatus] = useState("Login");
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={image_LOGO}></img>
            </div>
            <div className="navlinks">
                <ul>
                    <a href="#"><li>Home</li></a>
                    <a href="#"><li>Contact</li></a>
                    <a href="#"><li>Cart</li></a>
                    <a href="#" onClick={()=>{
                        if(initialStatus === 'Login'){
                            changeLoginStatus('Logout');
                        }else{
                            changeLoginStatus('Login');
                        }
                    }}><li>{initialStatus}</li></a>
                </ul>
            </div>
        </div>
    )
}
export default Header;