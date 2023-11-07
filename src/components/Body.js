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
  const [restaurants,setRestaurants]=useState([]);

  useEffect(()=>{             
    getRestaurant();                                    
  },[]);          

  async function getRestaurant(){
    const data=await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.6235274&lng=74.6917418&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    )
    const json=await data.json();
    setRestaurants(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

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