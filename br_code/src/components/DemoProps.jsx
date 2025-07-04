import { useRef, useState } from "react";

export default function DemoProps() {
    const [count,setCount] = useState(0);
 const countRef = useRef(0);
    const increment =() => {
        setCount(count + 1);
        countRef.current++;

        console.log('State :', count);
        
    }
    const decrement =() => setCount(count - 1);
    return(
        <>
           <div className="tutorial">
            <h1> Count: {count} </h1>
            <button onClick={decrement} >Decrement</button>
            <button onClick={increment} >Increment</button>
           </div>
        </>
    )

}