import { useState } from "react";
import { Link } from "react-router-dom";   
import useOnline from "../utils/useOnline";
            
const Title=()=>(
    <a href="/">
        <img 
        className="logo"
        alt="logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwb0D5yQSwJFEmL-lXUvEWZAbsYvCP2QrlXg&usqp=CAU"
        />
    </a>
      
);

const Header=()=>{
    const [isLoggedIn,setIsLoggedIn]=useState(false);
    const isOnline=useOnline();
    return (
        <div className="header">
            <Title />
            <div className="nav-items"> 
            <ul className="nav-list-items">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li>Cart</li>
                <li><Link to="/instamart">InstaMart</Link></li>
                <li>{isOnline?"🟢":"🔴"}</li>
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