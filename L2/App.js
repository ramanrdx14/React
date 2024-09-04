/*

if we want to create this type of tree structure.

<div id="parent">
    <div id="child">
        <h1>Welcome to react<h1>
        <h2>Welcome to react<h2>
    <div>
</div>



If we want to pass 2siblings then we can use the Array of tags.
*/
import React from "react";
import ReactDOM from "react-dom"
const parent = React.createElement('div',{id:'parent'},
               React.createElement('div',{id:'child'},
               React.createElement('h1',{},[
                React.createElement('h1',{},'Welcome to React'),
                React.createElement('h2',{},'Welcome to React')
               ])));
const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(parent);
root.render(parent);