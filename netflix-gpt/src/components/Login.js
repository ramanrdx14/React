import React, { useRef, useState } from "react";
import Header from "./Header";
import Browse from "./Browse"
import checkValidData from "../utils/validate";
import { createUserWithEmailAndPassword , signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [signIn, setSignInSignUp] = useState(true);
  const email = useRef(null);
  const password = useRef(null);
  const fullname = useRef(null);
  const [errorMessege, seterrorMessege] = useState(null);
  const navigate   = useNavigate();

  const handleButtonClick = () => {
    const isValid = checkValidData(email.current.value, password.current.value);
    seterrorMessege(isValid);

    //if the email or password validations is incorrect
    if (isValid) return;

    //sign up user
    if (!signIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessege(errorCode + " " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          if(user){
            navigate("/browse");
          }
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessege(errorCode + " " + errorMessage);
        });
    }
  };

  return (
    <div>
      <div className="relative">
        <Header />
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7c0e18aa-2c95-474d-802e-7f30e75dcca4/web/IN-en-20241014-TRIFECTA-perspective_e7121311-c11e-4809-a3e6-22abffa33569_small.jpg "
          alt="Background"
          className="w-full h-screen"
        />
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <form
          className="p-12 bg-black absolute flex flex-col top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-opacity-80 font-sans"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="text-white m-2 font-bold ">
            {signIn == true ? <span>Sign In</span> : <span>Sign Up</span>}
          </div>
          {!signIn && (
            <input
              type="text"
              placeholder="Full Name"
              className="px-5 py-1 m-2 rounded-md bg-slate-700"
              aria-label="Email Address"
              ref={fullname}
            />
          )}
          <input
            type="text"
            placeholder="Email Address"
            className="px-5 py-1 m-2 rounded-md bg-slate-700"
            aria-label="Email Address"
            ref={email}
          />
          <input
            type="password"
            placeholder="Password"
            className="px-5 py-1  m-2 rounded-md bg-slate-700"
            aria-label="Password"
            ref={password}
          />
          <p className="text-red-700 font-sans font-semibold m-2">
            {errorMessege}
          </p>
          <button
            className="px-5 py-1 m-2 bg-red-700 rounded-md text-white"
            onClick={() => handleButtonClick()}
          >
            {signIn == true ? <span>Sign in</span> : <span>Sign up</span>}
          </button>
          <p
            className="text-white text-sm cursor-pointer m-2"
            onClick={() => {
              signIn == true ? setSignInSignUp(false) : setSignInSignUp(true);
            }}
          >
            {signIn == true
              ? "New to Netflix Sign Up Now"
              : "Already registered Sign In Now."}
          </p>
        </form>
      </div>
    </div>
  );
};
export default Login;
