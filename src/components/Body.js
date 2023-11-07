import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../constants";
import { useState } from "react";

 //if we need to maintain the variable that changes in itself we use react variable(state varible)
 //to create a state variable we use useState()  ==>usestate is a hook 
 //hook is just a normal fn created for specific functionality
 //in this case useState hook is used to create state variables


const Body=()=>{

  const [searchTxt,setSearchTxt]=useState("Vaishali")  //searchTxt is a local state variable ("vaishali is default value")
  //usestate hooks returns a array:- returns [variableName,setfn]  the above one is destructured                                                            
   //setSearchtxt is funcality
  return (
    <>
    <div className="search-container">
      <input 
      className="search-input"
      placeholder="Search"
      value={searchTxt}
      onChange={(e)=>{               
      setSearchTxt(e.target.value);          //setSearchtxt will put e.target.value to searchTxt variable    
      }}                                              
      />                                          
      <button className="search-btn">Search-{searchTxt}</button>

    </div>
    <div className="restaurant-list">
    {
      restaurantList.map((restaurant)=>(
        <RestaurantCard {...restaurant.info}  key={restaurant.info.id} />
      ))
    }
    </div>
  </>
  )

};
        
    

export default Body;    