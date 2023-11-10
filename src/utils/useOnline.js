import { useEffect, useState } from "react";

const useOnline=()=>{

    const [isOnline,setIsOnline]=useState(true);

    useEffect(()=>{
        const handleOnline=()=>{
            setIsOnline(true);
        }

        const handleOffline=()=>{
            setIsOnline(false);
        }
        window.addEventListener('online',handleOnline)
        window.addEventListener('offline',handleOffline)

        return ()=>{
            window.removeEventListener('online',handleOnline)   //to removeListener we have to pass the same fn as the addevent listener
            window.removeEventListener('offline',handleOffline) //so we wrote handle online and offline fn as different(we cannot write code inside remoEvent) 
        }
    },[])



 return isOnline;   
}

export default useOnline;