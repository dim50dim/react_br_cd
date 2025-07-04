import { useEffect, useRef } from "react";

export default function DemoProps() {
    const inputRef = useRef | null ;

    useEffect(() => {
        inputRef.current?.focus();
    },[]);
    
   
    
    
    return(
        <>
           <div className="tutorial">
        
        
       <input type="text"  ref={inputRef} placeholder="Type something crucial"/>
           </div>
        </>
    )

}