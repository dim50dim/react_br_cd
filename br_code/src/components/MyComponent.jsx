import {  useEffect, useState } from "react";

export default function MyComponent() {
         const [width, setWidth] = useState(window.innerWidth)
         const [height,setHeight] = useState(window.innerHeight);
 useEffect(() => {
   window.addEventListener('resize',handleResize);
   console.log(('Event listener added'));

   return () => {
    window.removeEventListener('resize', handleResize);
    console.log('event listener removed');
    
   }
 },[]);
   
  useEffect (() => {
    document.title = `Size : ${width} * ${height}`
  },[width,height])


   

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