import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../constants";
import { useState,useEffect } from "react";

function filterData(searchTxt,restauarantList){
  const filterData=restauarantList.filter((restaurant)=>
  restaurant.info.name.toLowerCase().includes(searchTxt.toLowerCase())
  );

  return filterData;
}

const Body=()=>{

  const [searchTxt,setSearchTxt]=useState("") 
  const [restaurants,setRestaurants]=useState(restaurantList);

  useEffect(()=>{               //useEffect is a hook whose fn is to re render our page only when the change of dependency state
    console.log("useeffect")   //useeffect call back fn will be called after the rending of page
  },[restaurants])              //emty dependency array=> useeffect will called only once after rendering our page
                              //dep array [searchTxt] =>first time after rendering + after rendering of our page whenever searchTxt get updated
  console.log("render")

  return (
    <>
    <div className="search-container">
      <input 
      className="search-input"
      placeholder="Search"
      value={searchTxt}
      onChange={(e)=>{               
      setSearchTxt(e.target.value);          
      }}                                              
      />                                          
      <button className="search-btn"
      onClick={()=>{
        const data=filterData(searchTxt,restaurantList)
        setRestaurants(data);
      }}
      >Search</button>

    </div>
    <div className="restaurant-list">
    {
      restaurants.map((restaurant)=>(                                      
          <RestaurantCard {...restaurant.info}  key={restaurant.info.id} />  
           ))
    }
    </div>
  </>
  )

};
        
    

export default Body;    