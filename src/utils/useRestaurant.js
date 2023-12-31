import { useEffect, useState } from "react";
import { FETCH_MENU_URL } from "../constants";

const useRestaurant=(resId)=>{

    const [restaurant,setRestaurant]=useState(null);

    useEffect(()=>{
        getRestauarant();
    },[])

    async function getRestauarant(){
        const data=await fetch(FETCH_MENU_URL + resId)
        const json=await data.json();
        setRestaurant(json?.data?.cards[0].card?.card?.info);
    }

    return restaurant;
}

export default useRestaurant;
