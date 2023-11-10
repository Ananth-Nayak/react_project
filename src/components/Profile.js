import { useState } from "react";

const Profile=(props)=>{
    const {name}=props;
    const [count,setCount]=useState(0)
    return(
        <div>
            <h2>Profile</h2>
            <h3>{name}</h3>
            <h3>{count}</h3>
            <button onClick={()=>{setCount(1)}}>Count</button>
        </div>
    )
}

export default Profile;