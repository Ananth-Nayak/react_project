import { useState } from "react";

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
    return (
        <div className="header">
            <Title />
            <div className="nav-items"> 
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
            </div>
            {isLoggedIn? (
                <button onClick={()=>setIsLoggedIn(false)}>Log out</button>
            ) :(
                <button onClick={()=>setIsLoggedIn(true)}>Log In</button>
            )}
        </div>
    )
};

export default Header;