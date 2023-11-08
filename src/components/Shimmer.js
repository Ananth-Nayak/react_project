const Shimmer=()=>{
    const ShimmerArray=new Array(20).fill("")
    return (
        <div className="restaurant-list">
            {
                ShimmerArray.map((e,index)=>(
                    <div key={index} className="shimmer-card"></div>
                ))
            }
        </div>
    )
};

export default Shimmer;

