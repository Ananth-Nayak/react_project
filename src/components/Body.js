import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../constants";

const Body=()=>{
  var searchTxt="Vaishali";

  return (
    <>
    <div className="search-container">
      <input 
      className="search-input"
      placeholder="Search"
      value={searchTxt}
      onChange={(e)=>{          //whenever we change in the input react will re render everything including the above variable value
      searchTxt=e.target.value;  //so it render above searchtxt value adds with e.target.value(since searchtxt is hardcoded value)
      console.log(searchTxt)    //therefor local variable(searchTxt) is not prefered in react due to re rendering 
      }}                                              
      />                                          
      <button className="search-btn">Search</button>

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