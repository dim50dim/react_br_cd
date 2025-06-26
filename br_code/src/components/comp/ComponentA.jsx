import { useState } from "react";
import ComponentB from "./ComponentB";

export default function ComponentA(){
    const [user,setUser] = useState('Bro');
    return(
        <>
           <div className="box">
                   <h1>Component A</h1>
                   <h2> {`HELLO ${user}`} </h2>
                   <ComponentB user='Max'/>
           </div>
        </>
    )
}