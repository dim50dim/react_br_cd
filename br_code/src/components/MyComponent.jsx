import { useState } from "react";

export default function MyComponent() {
       const [name,setName] = useState('Guest');
       function handleChange (e) {
        setName(e.target.value);
       }
    return (
        <>
             <div>
                <input value={name}  onChange={handleChange}/>
                <p> Name: {name} </p>
             </div>
        </>
    )
}