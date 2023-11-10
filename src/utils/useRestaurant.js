const useRestaurant=(resId)=>{

    const [restaurant,setRestaurant]=useState(null);

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

    return restaurant;
}

export default useRestaurant;

//fn component is a fn which returns a jsx code
//where as hooks are fn which containes piece of js code which extracts sonme logic