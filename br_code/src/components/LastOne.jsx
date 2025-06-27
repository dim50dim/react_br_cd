import { useEffect, useRef, useState } from "react";

export default function LastOne() {

  const ref = useRef(0);
useEffect(() => {
    console.log('COMPONENT RENDER');
    
})

function handlClick() {
    ref.current = ref.current + 1;
    console.log(ref.current);
    
}
    return(
        <>
           <div>
            <button onClick={handlClick}>Click me</button>
           </div>
        </>
    )
}