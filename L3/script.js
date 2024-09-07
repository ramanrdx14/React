import React from "react";
import ReactDOM from "react-dom/client"


//React Element 
// const heading = React.createElement('h1',{id:"heading"},"Nameste react");
// const root    = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


//JSX Syntex 
// const heading = <h1>This is JSX</h1>
// const root    = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


//Functional Component
// const HeadingComponent = ()=>(
// <h1 className="heading">This is react functional componet</h1>
// )
// const root    = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadingComponent/>);

//Component Composition : using one component inside the another component is called component composition

const TitleComponent = ()=>(
    <h3 className="title">Welcome to React</h3>
)

const ParaComponenet =()=>(
    <div id="container">
        <TitleComponent/>
        <h1>This is heading:</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ParaComponenet></ParaComponenet>);