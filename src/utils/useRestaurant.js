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
         console.log(json?.data)
    }

    return restaurant;
}

export default useRestaurant;

//fn component is a fn which returns a jsx code
//where as hooks are fn which containes piece of js code which extracts sonme logic