import { useEffect, useState } from "react"

export default function DigitalClock() {
   const [time,setTime] = useState(new Date());
   useEffect (() => {
    
   },[])
   

    return(
        <>
        <div className="clock-container">
             <div className="clock">
                  <span>00:00:00</span>
             </div>
        </div>
        </>
    )
}