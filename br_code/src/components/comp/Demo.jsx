import { useState } from "react"

export default function Demo() {
const [count,setCount] = useState(0);
const handleClickPlus = () => setCount(count + 2);
const handleClickMinus = () => setCount(count - 1);
    return(
        <>

           <h1>useStat Simply Explained!!!</h1>
             <p>  Count : {count} </p>
             <button onClick={handleClickPlus} > Plus me </button>
             <button onClick={handleClickMinus} > Minus me </button>
        </>
    )
}