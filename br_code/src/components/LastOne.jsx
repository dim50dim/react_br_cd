import { useEffect, useRef, useState } from "react";

export default function LastOne() {

  const ref = useRef('Ibiza');
  console.log(ref);
  const inputRef = useRef(null)
useEffect(() => {
    console.log('COMPONENT RENDER');
    
})

function handlClick() {
    ref.current = ref.current + 1;
    console.log(ref.current);
    
}
    return(
        <>
                <input type="text" ref={inputRef} />
           <div>
            <button onClick={handlClick}>Click me</button>
           </div>
        </>
    )
}