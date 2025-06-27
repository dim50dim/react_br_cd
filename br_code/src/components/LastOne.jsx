import { useEffect, useRef, useState } from "react";

export default function LastOne() {

  const ref = useRef('Ibiza');
  console.log(ref);
  const inputRef = useRef(null)
useEffect(() => {
    console.log('COMPONENT RENDER');
})

function handlClick() {
inputRef.current.focus();
    
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