import React from "react"
import {useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
const Header = ()=>{
    const user     = useSelector((store)=>store.user);
    console.log(user);
    const navigate = useNavigate();
    const signoutHandler = ()=>{
        signOut(auth).then(() => {
            navigate("/");
          }).catch((error) => {
            navigate("/error");
          });
    }
    return (
        <div className="">
            <div className="flex w-full justify-around absolute m-4">
            <div><img src="https://th.bing.com/th/id/R.715e69176d3cec74504b3ae00f2676c6?rik=vGDJl%2bfFL64qmw&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f4%2fNetflix-Logo-HD.png&ehk=aWIF5J5TR6tD4IrfNFhXE0dNVq%2f6n%2f6OViRGEsRS%2bNg%3d&risl=&pid=ImgRaw&r=0" className="h-10 w-44"></img></div>
            <div className=""></div>
            <div className=""></div>
            <div className="cursor-pointer" onClick={()=>signoutHandler()}>{user != null?"Signout":null}</div>
            </div>
        </div>
    )
}
export default Header;