import React, { useEffect } from "react";
import Header from "./Header";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import Login from "./Login";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
const Body = () => {
  const dispatch  = useDispatch()
  const appRouter = createBrowserRouter([
    { path: "/", element: <Login></Login> },
    { path: "/browse", element: <Browse></Browse> },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,displayName} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName}))
      } else {
       dispatch(removeUser());
      }
    });
  }, []);
  return (
    <RouterProvider router={appRouter}>
      <div>
        <Header></Header>
        <Browse></Browse>
      </div>
    </RouterProvider>
  );
};

export default Body;
