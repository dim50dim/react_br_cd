import { useEffect, useState } from "react";

export default function DemoProps() {
    const [count,setCount] = useState(0);
    useEffect(() => {
        console.log('The count is ' , count);
        
    },[count]);
    const increment =() => setCount(count + 1);
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