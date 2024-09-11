import React from "react";
import { image_LOGO } from "../utils/constants";
const Header = ()=>{
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={image_LOGO}></img>
            </div>
            <div className="navlinks">
                <ul>
                    <li>Home</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}
export default Header;