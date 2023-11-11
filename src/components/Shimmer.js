const Shimmer=()=>{
    const ShimmerArray=new Array(20).fill("")
    return (
        <div className="flex flex-wrap">
            {
                ShimmerArray.map((e,index)=>(
                    <div key={index} className="w-[225px] h-[320px]  m-3 shadow-lg bg-gray-200 rounded-md"></div>
                ))
            }
        </div>
    )
};

export default Shimmer;

