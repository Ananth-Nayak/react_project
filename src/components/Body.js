import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../constants";
import { useState } from "react";

function filterData(searchTxt,restauarantList){
  const filterData=restauarantList.filter((restaurant)=>
  restaurant.info.name.toLowerCase().includes(searchTxt.toLowerCase())
  );

  return filterData;
}


const Body=()=>{

  const [searchTxt,setSearchTxt]=useState("") 
  const [restaurants,setRestaurants]=useState(restaurantList);    //to maintain the state of restaurantlist when we filtering for search button
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
        //need to filter data
        const data=filterData(searchTxt,restaurantList)  //we use restaurantList instead of restaurant(state variable)
                                                         //bcz we should filter the data with all the restaurants(if we use state var the we are filtering in already filtered data)
        //and using that data,we update restaurantList
        setRestaurants(data);
      }}
      >Search</button>

    </div>
    <div className="restaurant-list">
    {
      restaurants.map((restaurant)=>(                                      //since default value in useState is restauarantList we use the state variable
        <RestaurantCard {...restaurant.info}  key={restaurant.info.id} />  //also when we filter in search it will only show filtered data if we use like this
      ))
    }
    </div>
  </>
  )

};
        
    

export default Body;    