/***
 */
//React.createElement=>object=>HTML(DOM) code
//JSx=>React.createElement=>object=>HTML

import React from "react";
import ReactDOM from "react-dom/client";

const heading=(
    <h1 id="heading" key="h1">
        Hello!
        </h1>
);

//components
//functional:-new
//class based:- old

const HeaderComponent=()=>(
    <div>
        <h1>namaste 1</h1>
        <h2>heading 2</h2>
    </div>
);

const root=ReactDOM.createRoot(document.getElementById("root"));


root.render(<HeaderComponent />);


 