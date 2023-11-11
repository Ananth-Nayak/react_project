import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../constants";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";

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
    setAllRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

  }

   if(!allRestaurants) return null;    

 
  return (allRestaurants.length===0)?(
    <Shimmer />
  ) : (
    <>
    <div className="p-5 inline-block bg-slate-200 rounded-lg my-5 mx-auto">
      <input 
      className="focus:bg-green-200 p-2 m-2 rounded-md"
      placeholder="Search"
      value={searchTxt}
      onChange={(e)=>{               
      setSearchTxt(e.target.value);          
      }}                                              
      />                                          
      <button className="p-2 m-2 bg-blue-500 hover:bg-gray-500 text-white rounded-xl"
      onClick={()=>{
        const data=filterData(searchTxt,allRestaurants)
        setFilteredRestaurants(data);
      }}
      >Search</button>

    </div>
    <div className="flex flex-wrap">
    {
      filteredRestaurants.map((restaurant)=>(
          <Link to={"/restaurant/"+restaurant?.info?.id} key={restaurant?.info?.id} className="restaurant" >
            <RestaurantCard {...restaurant?.info} />
          </Link>   
           ))
    }
    </div>
  </>
  )

};
        
    

export default Body;    