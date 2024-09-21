import React, { useState } from "react";
import { image_LOGO } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = ()=>{
    const [initialStatus,changeLoginStatus] = useState("Login");
    const status = useOnlineStatus();
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={image_LOGO}></img>
            </div>
            <div className="navlinks">
                <ul>
                    <Link to="/"><li>Online Status :{status == true?"🟢":"🔴"}</li></Link>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/contact"><li>Contact</li></Link>
                    <Link to="/about"><li>About Us</li></Link>
                    <Link to="#"><li>Cart</li></Link>
                    <Link to="/grocery"><li>Grocery</li></Link>
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