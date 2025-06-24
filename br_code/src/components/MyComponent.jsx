import {  useState } from "react";

export default function MyComponent() {
         const [width, setWidth] = useState(window.innerWidth)
         const [height,setHeight] = useState(window.innerHeight);
   window.addEventListener('resize',handleResize);
   console.log(('Event listener added'));
   

         function handleResize(){
            setWidth(window.innerWidth)
            setHeight(window.innerHeight);
         }
    return (
      <>
      <p>Window Widht : {width}px</p>
      <p>Window Height : {height}px</p>
      </>
    )
      
}