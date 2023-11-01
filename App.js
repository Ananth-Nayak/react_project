/***
 * Parcel Features:-
 * Hot Module Replacement:-whenever we click save button it automatically reload webpage
 * parcel will keep track of the all the files which are updating
 * it uses file watcher algorithm written in c++                       [npx parcel build index.html(delete main:-app.js in package.json file or it will throw error)]
 * it creates local server for developers to check the code
 * it bundles all files to production ready
 * minifier
 * cleaning our code(like removing console.log)
 * superfast
 * image optimaisation
 * caching while development
 * compatible with older version of browser
 * 
 */

import React from "react";
import ReactDOM from "react-dom/client";

const heading=React.createElement("h1",{
    id:"title1"
},"Heading1");

const heading2=React.createElement("h2",{
    id:"title2"
},"Heading2");

const container=React.createElement("div",{
    id:"container"
},[heading,heading2]);


const root=ReactDOM.createRoot(document.getElementById("root"));
//passing a react element inside the root
root.render(container);
//render modifies dom
//it will override if any content already present in the root element