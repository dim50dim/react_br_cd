import { useEffect, useRef, useState } from "react";

export default function LastOne() {

  const ref = useRef('Ibiza');
  console.log(ref);
  const inputRef = useRef(null)
useEffect(() => {
    console.log('COMPONENT RENDER');
})

function handleClick() {
inputRef.current.focus();
    inputRef.current.style.backgroundColor = 'red'
}
    return(
        <>
                <input type="text" ref={inputRef} />
           <div>
            <button onClick={handleClick}>Click me</button>
           </div>
        </>
    )
}