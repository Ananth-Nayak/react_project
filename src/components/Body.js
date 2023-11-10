import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../constants";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

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
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9141417&lng=74.8559568&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    )
    const json=await data.json();
    console.log(json);
    setAllRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

  }

  
  if(!allRestaurants) return null;    

 
  return (allRestaurants.length===0)?(
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
          <Link to={"/restaurant/"+restaurant?.info?.id} key={restaurant?.info?.id} >
            <RestaurantCard {...restaurant?.info} />
          </Link>   
           ))
    }
    </div>
  </>
  )

};
        
    

export default Body;    