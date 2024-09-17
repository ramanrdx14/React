import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import About from "./components/About.js"
import Contact from "./components/Contact.js"
import Error from "./components/Error.js";
import {createBrowserRouter,Outlet,RouterProvider} from "react-router-dom"
import Menu from "./components/Menu.js";

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
return (
    <div className="applayout">
        <Header></Header>
        <Outlet></Outlet>
    </div>
)
}
const appRouter = createBrowserRouter([
    {path:"/",element:<AppLayout/>,errorElement:<Error/>,children:[
        {path:"/about",element:<About/>},
        {path:"/contact",element:<Contact/>},
        {path:"/",element:<Body/>},
        {path:"/restaurant/:id",element:<Menu/>}
    ]}
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}></RouterProvider>)

