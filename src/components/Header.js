import { useState } from "react";
import { Link } from "react-router-dom";   //link will work like anchor tag but wont refresh or render our whole page
//anchor tag will refresh and renders whole page again if we use <a> while moving to different path of our webpage
//since we are fetching data from api it is better to avoid refreshing our code so we use Link                                           

//SPA-single page application (it means that whenever we)
//client side routing
            
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
                <li><Link to="/">Home</Link></li>
                <li><a href="">About</a></li>
                <li><Link to="/contact">Contact</Link></li>
                <li>Cart</li>
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