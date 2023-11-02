/***
 *  npx is used for executing the package without downloading it
 *  npm is used for packages to have in our code                 
 * 
 */

import React from "react";
import ReactDOM from "react-dom/client";

const heading=React.createElement("h1",{
    id:"title1",
    key:"h1",
},"Heading1");

//React.createElement=>object=>HTML(DOM) code

const heading2=React.createElement("h2",{
    id:"title2",
    key:"h2",
},"Heading2");

const container=React.createElement("div",{
    id:"container"
},[heading,heading2]);                        //whenever we pass elements in array we should give key valuse to each array elements in props


const root=ReactDOM.createRoot(document.getElementById("root"));


root.render(container);

//JSx=>html like syntax
 