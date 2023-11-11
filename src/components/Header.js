import { useState } from "react";
import { Link } from "react-router-dom";   
import useOnline from "../utils/useOnline";
            
const Title=()=>(
    <a href="/">
        <img 
        className="h-28 p-2 "
        alt="logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwb0D5yQSwJFEmL-lXUvEWZAbsYvCP2QrlXg&usqp=CAU"
        />
    </a>
      
);

const Header=()=>{
    const [isLoggedIn,setIsLoggedIn]=useState(false);
    const isOnline=useOnline();
    return ( 
        <div className="flex justify-between bg-slate-200 shadow-xl">
            <Title />
            <div className="nav-items"> 
            <ul className="flex py-10">
                <li className="px-2"><Link to="/">Home</Link></li>
                <li className="px-2"><Link to="/about">About</Link></li>
                <li className="px-2"><Link to="/contact">Contact</Link></li>
                <li className="px-2">Cart</li>
                <li className="px-2"><Link to="/instamart">InstaMart</Link></li>
                <li className="px-2">{isOnline?"🟢":"🔴"}</li>
            </ul>
            </div>
            {isLoggedIn? (
                <button onClick={()=>setIsLoggedIn(false)}>Log out</button>
            ):(
                <button onClick={()=>setIsLoggedIn(true)}>Log In</button>
            )}
        </div>
    )
};

export default Header;