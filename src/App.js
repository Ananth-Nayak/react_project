
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"; 
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//creteBrowsRout used to give path
//since we need to render our root using fn component and according to various path
// RouterProvider is fn component used when rendering our root with attribute containing createBrowseHistory path lists


const AppLayout=()=>{
    return (
        <>
            <Header/>
            <Body/>
            <Footer/>
        </>
    )
    
}

const appRouter=createBrowserRouter([   //cretBrowsRouter takes array of list(path)
    {
        path:"/",
        element:<AppLayout />, //at path "/" it renders applayout fn component
        errorElement:<Error />
    },
    {
        path:"/about",
        element:<About />,
        errorElement:<Error/>  //to handle error
    }
]);

const root=ReactDOM.createRoot(document.getElementById("root"));


root.render(<RouterProvider router={appRouter} />);    


 