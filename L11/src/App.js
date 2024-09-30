import React,{lazy, Suspense, useState} from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import About from "./components/About.js"
import Contact from "./components/Contact.js"
import Error from "./components/Error.js";
import {createBrowserRouter,Outlet,RouterProvider} from "react-router-dom"
import Menu from "./components/Menu.js";
import { useContext } from "react";
import UserContext from "./utils/UserContext.js";
const Grocery = lazy(()=>import("./components/Grocery.js"))
//Components Reaquired:

/*
    1. header
       -> logo
       -> nav links

    2. Body
        -> search bar
        -> cards

    3. Footer
        -> links
        -> addaress
        -> contacts
*/

const AppLayout = ()=>{
const [getUserName,setUserName] = useState("Adam");
return (
    <div className="applayout">
        <UserContext.Provider value={{loggedInUser:getUserName,setUserName:setUserName}}>
        <Header></Header>
        <Outlet></Outlet>
        </UserContext.Provider>
    </div>
)
}
const appRouter = createBrowserRouter([
    {path:"/",element:<AppLayout/>,errorElement:<Error/>,children:[
        {path:"/about",element:<About/>},
        {path:"/contact",element:<Contact/>},
        {path:"/",element:<Body/>},
        {path:"/grocery",element:<Suspense fallback=".."><Grocery/></Suspense>},
        {path:"/restaurant/:id",element:<Menu/>}
    ]}
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}></RouterProvider>)

