import { useState } from "react";

export default function MyComponent() {
       const [name,setName] = useState('Guest');
       const [quantity,setQuantity] = useState(1)
       function handleChange (e) {
        setName(e.target.value);
       }
       function handleQuantity(e){
        setQuantity(e.target.value)
       }
    return (
        <>
             <div>
                <input value={name}  onChange={handleChange}/>
                <p> Name: {name} </p>

                <input value={quantity} onChange={handleQuantity} type="number" />
                <p> Quantity : {quantity} </p>
             </div>
        </>
    )
}