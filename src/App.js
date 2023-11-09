
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"; 
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";



const AppLayout=()=>{
    return (
        <>
            <Header/>
            <Outlet />          { //all the children will go at the outlet  
            <Footer/>                      }
            
        </>
    )
    
}

const appRouter=createBrowserRouter([   
    {
        path:"/",
        element:<AppLayout />, 
        errorElement:<Error />,
        children:[                 //we need our  /about page content inside applayout bw header and footer so we create children inside applayout
            {
                path:"/",
                element:<Body />,
                errorElement:<Error/>  
            },
            {
                path:"/about",
                element:<About />,
                errorElement:<Error/>  
            },
            {
                path:"/contact",
                element:<Contact />,
                errorElement:<Error/>  
            }
        ]
    },

]);

const root=ReactDOM.createRoot(document.getElementById("root"));


root.render(<RouterProvider router={appRouter} />);    


 