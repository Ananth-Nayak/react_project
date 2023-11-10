import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";

const RestaurantMenu=()=>{
    const {resId}=useParams();
    const [restaurant,setRestaurant]=useState(null)

    useEffect(()=>{
        getRestauarant();
    },[])

    async function getRestauarant(){
        const data=await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9141417&lng=74.8559568&restaurantId=" + resId
        )
        const json=await data.json();
        setRestaurant(json?.data?.cards[0].card?.card?.info);
         console.log(json?.data)
    }

     return (!restaurant)?<Shimmer/>:(
        <div className="restaurant-info">
            <div>
            <h1>Restaurant id :{resId}</h1>
            <h2>{restaurant?.name}</h2>
            <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
            </div>
            <div>
            <h3>{restaurant?.areaName}</h3>
            <h3>{restaurant?.city}</h3>
            <h3>{restaurant?.avgRating} Stars</h3>
            <h3>{restaurant?.costForTwoMessage}</h3>
            <h3>{restaurant?.cuisines?.join(", ")}</h3>
            </div>
         </div> 
    )

}

export default RestaurantMenu;