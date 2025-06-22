import { useState } from "react";

export default function Button() {
    // const [name, useName] = useState('Think')
    const handleClick = (e) => console.log(e.target.textContent = 'HOW');
    // const handleClick2 = (e) => e.target.textContent = 'Nothing'; 
        
        return(
            
            <>
               <h2>what</h2>

            <button onDoubleClick={handleClick}>Click me</button>
            
            </>
        )
}