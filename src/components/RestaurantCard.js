import { IMG_CDN_URL } from "../constants";

const RestaurantCard=({name,cuisines,avgRating,cloudinaryImageId})=>{ 
    return (
        <div className="w-[225px] h-[320px] p-2 m-3 shadow-lg bg-slate-200 rounded-md hover:shadow-black">
            <img 
            src={ IMG_CDN_URL+ cloudinaryImageId} class="w-[100%] h-[175px] rounded-lg" />
            <h2 className="font-bold text-xl">{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{avgRating + " Stars"}</h4>
        </div>
    )
}

export default RestaurantCard;