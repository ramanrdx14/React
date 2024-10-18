import React, { useState } from "react";
import Header from "./Header";
const Login = () => { 
  const [signIn,setSignInSignUp] = useState(true);
  return (
    <div>
      <div className="relative">
        <Header />
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/7c0e18aa-2c95-474d-802e-7f30e75dcca4/web/IN-en-20241014-TRIFECTA-perspective_e7121311-c11e-4809-a3e6-22abffa33569_small.jpg " alt="Background" className="w-full h-screen" />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <form className="p-12 bg-black absolute flex flex-col top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-opacity-80 font-sans">
          <div className="text-white m-2 font-bold ">{signIn==true?<span>Sign In</span>:<span>Sign Up</span>}</div>
          {signIn&& <input type="text" placeholder="Full Name" className="px-5 py-1 m-2 rounded-lg" aria-label="Email Address" />}
          <input type="text" placeholder="Email Address" className="px-5 py-1 m-2 rounded-lg" aria-label="Email Address" />
          <input type="password" placeholder="Password" className="px-5 py-1  m-2 rounded-lg" aria-label="Password" />
          <button className="px-5 py-1 m-2 bg-red-700 rounded-lg text-white">{signIn==true?<span>Sign in</span>:<span>Sign up</span>}</button>
          <p className="text-white text-sm cursor-pointer" onClick={()=>{signIn==true?setSignInSignUp(false):setSignInSignUp(true)}}>{signIn == true?"New to Netflix Sign Up Now":"Already registered Sign In Now."}</p>
        </form>
      </div>
    </div>
  );
};
export default Login;
