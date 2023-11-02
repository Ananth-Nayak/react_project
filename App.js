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
const string="Ananth Nayak";

const HeaderComponent=()=>(
    <div>
        {heading}   
        <h1>{string}</h1>                  {/*we write jsx or any piece of js code inside {} since heading is a variable we write in {}*/}
        <h2>namaste 1</h2>            {/* jsx return only one element */}
        <h2>heading 2</h2>
    </div>
);

const root=ReactDOM.createRoot(document.getElementById("root"));


root.render(<HeaderComponent />);   //rendering of functional component


 