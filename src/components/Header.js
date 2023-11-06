export const Title=()=>(
    <a href="/">
        <img 
        className="logo"
        alt="logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwb0D5yQSwJFEmL-lXUvEWZAbsYvCP2QrlXg&usqp=CAU"
        />
    </a>
      
);

const Header=()=>(
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
    </div>
);

export default Header;