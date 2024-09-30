import React, { useContext, useState } from "react";
import { image_LOGO } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Header = ()=>{
    const [initialStatus,changeLoginStatus] = useState("Login");
    const status = useOnlineStatus();
    const data = useContext(UserContext);
    return (
        <div className="flex justify-between bg-black flex-wrap">
            <div className="hidden sm:block md:block lg:block xl:block">
                <img className="w-24" src={image_LOGO}></img>
            </div>
            <div className="navlinks">
                <ul className="flex p-4 m-4 gap-8 flex-col sm:flex-row lg:flex-row xl:flex-row">
                    <Link  className="font-sans font-medium text-white" to="/"><li>Online{status == true?"🟢":"🔴"}</li></Link>
                    <Link  className="font-sans font-medium text-white" to="/"><li>Home</li></Link>
                    <Link  className="font-sans font-medium text-white" to="/contact"><li>Contact</li></Link>
                    <Link  className="font-sans font-medium text-white" to="/about"><li>About Us</li></Link>
                    <Link  className="font-sans font-medium text-white" to="#"><li>Cart</li></Link>
                    <Link  className="font-sans font-medium text-white" to="/grocery"><li>Grocery</li></Link>
                    <Link  className="font-sans font-medium text-red-600 " to="#"><li>👨‍✈️{data.loggedInUser}</li></Link>
                    <Link  className="font-sans font-medium text-white" to="#" onClick={()=>{
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