import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header.js";
import Body from "./components/Body.js";

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
        <Body></Body>
    </div>
)
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout></AppLayout>)

