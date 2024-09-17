import React, { useState } from "react";
import { image_LOGO } from "../utils/constants";
import { Link } from "react-router-dom";
const Header = ()=>{
    const [initialStatus,changeLoginStatus] = useState("Login");
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={image_LOGO}></img>
            </div>
            <div className="navlinks">
                <ul>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/Contact"><li>Contact</li></Link>
                    <Link to="/about"><li>About Us</li></Link>
                    <Link to="#"><li>Cart</li></Link>
                    <Link to="#" onClick={()=>{
                        if(initialStatus === 'Login'){
                            changeLoginStatus('Logout');
                        }else{
                            changeLoginStatus('Login');
                        }
                    }}><li>{initialStatus}</li></Link>
                </ul>
            </div>
        </div>
    )
}
export default Header;