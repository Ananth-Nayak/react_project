export function filterData(searchTxt,restauarantList){
    const filterData=restauarantList.filter((restaurant)=>
    restaurant.info.name.toLowerCase().includes(searchTxt.toLowerCase())
    );
  
    return filterData;
  }