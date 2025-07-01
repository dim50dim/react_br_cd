import {  useState,useEffect } from "react"

export default function MyComponent() {
 const [count,setCount] = useState(0);
 useEffect(() => {
     document.title = `Count : ${count}`
 })
 function addCount () {
    setCount(c => c +1)
  }
 function subtractCount () {
    setCount(c =>c - 1)
  }
    return (
        <>
               <p> Count : {count}</p>
               <button  onClick={addCount}> ADD </button>
               <button  onClick={subtractCount}> Substract </button>
        </>
    )
}