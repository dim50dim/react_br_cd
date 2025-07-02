import {  useState,useEffect } from "react"

export default function MyComponent() {
 const [count,setCount] = useState(0);
 const [color,setColor] = useState('green');
 useEffect(() => {
     document.title = `Count : ${count} ${color}`
 },[count,color])
 function addCount () {
    setCount(c => c +1)
  }
 function subtractCount () {
    setCount(c =>c - 1)
  }
  function changeColor() {
    setColor(c => c === 'green' ? 'red' : 'green' )
  }
    return (
        <>
               <p style={{color:color}}> Count : {count}</p>
               <button  onClick={addCount}> ADD </button>
               <button  onClick={subtractCount}> Substract </button> <br />
               <button onClick={changeColor}> Change color</button>
        </>
    )
}