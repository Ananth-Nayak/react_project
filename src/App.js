
import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"; 
import Body from "./components/Body";
import Footer from "./components/Footer";
import Error from "./components/Error";
import Contact from "./components/Contact";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestroMenu";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";

/**
 * Chunking
 * Dynamic Bundling
 * lazy loading
 * code splitting
 * on demand loading
 * dynamic import
 * */

const Instamart=lazy(()=>import("../src/components/Instamart")) //chunking(we should create this where we are impoerting)
// upon on demand loading => upon rendering =>react suspends loading 

const About=lazy(()=>import("./components/About"));



const AppLayout=()=>{
    return (
        <>
            <Header/>
            <Outlet />        
            <Footer/>         
             </>
    )
    
}

const appRouter=createBrowserRouter([   
    {
        path:"/",
        element:<AppLayout />, 
        errorElement:<Error />,
        children:[                 
            {
                path:"/",
                element:<Body />,
                errorElement:<Error/>  
            },
            {
                path:"/about",
                element:(
                <Suspense fallback={<h1>Loading....</h1>}>
                <About />
                </Suspense>
                ),
                errorElement:<Error/>,
                children:[{
                    path:"profile",                       
                    element:<Profile />               
                }]                      

            },
            {
                path:"/contact",
                element:<Contact />,
                errorElement:<Error/>  
            },
            {
                path:"restaurant/:resId",
                element:<RestaurantMenu />
            },
            {
                path:"/instamart",
                element:(
                <Suspense fallback={<Shimmer />}>
                    <Instamart />
                </Suspense>
                )    
            },
        ]
    },

]);

const root=ReactDOM.createRoot(document.getElementById("root"));


root.render(<RouterProvider router={appRouter} />);    


 