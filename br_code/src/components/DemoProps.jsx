import { useRef, useState } from "react";

export default function DemoProps() {
    const [count,setCount] = useState(0);
 const countRef = useRef(0);
    const increment =() => {
        setCount(count + 1);
        countRef.current++;

        console.log('State :', count);
        console.log('Ref :' ,countRef.current);
        
        
        
    }
    
    return(
        <>
           <div className="tutorial">
            <h1> Count: {count} </h1>
        
            <button onClick={increment} >Increment</button>
           </div>
        </>
    )

}