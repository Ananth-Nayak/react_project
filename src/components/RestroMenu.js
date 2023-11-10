import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu=()=>{
    const {resId}=useParams();
    const restaurant=useRestaurant(resId);

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