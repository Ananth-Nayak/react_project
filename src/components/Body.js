import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../constants";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";

function filterData(searchTxt,restauarantList){
  const filterData=restauarantList.filter((restaurant)=>
  restaurant.info.name.toLowerCase().includes(searchTxt.toLowerCase())
  );

  return filterData;
}

const Body=()=>{
  const [allRestaurants,setAllRestaurants]=useState([])
  const [searchTxt,setSearchTxt]=useState("") 
  const [filteredRestaurants,setFilteredRestaurants]=useState([]);

  useEffect(()=>{             
    getRestaurant();                                    
  },[]);          

  async function getRestaurant(){
    const data=await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.6235274&lng=74.6917418&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    )
    const json=await data.json();
    setAllRestaurants(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurants(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

  }

  //not rendering (or avoid rendering)
  if(!allRestaurants) return null;    //when we dont have allRestaurants then it wont render anything

  if(filteredRestaurants?.length===0) return <h1>Restaurant is not found</h1>

  //conditional rendering
  return allRestaurants.length===0?(
    <Shimmer />
  ) : (
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
        const data=filterData(searchTxt,allRestaurants)
        setFilteredRestaurants(data);
      }}
      >Search</button>

    </div>
    <div className="restaurant-list">
    {
      filteredRestaurants.map((restaurant)=>(                                      
          <RestaurantCard {...restaurant.info}  key={restaurant.info.id} />  
           ))
    }
    </div>
  </>
  )

};
        
    

export default Body;    