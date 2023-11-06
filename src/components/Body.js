import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../constants";

const Body=()=>(
    <div className="restaurant-list">
    {
      restaurantList.map((restaurant)=>(
        <RestaurantCard {...restaurant.info}  key={restaurant.info.id} />
      ))
    }
    </div>
        
    )

export default Body;    