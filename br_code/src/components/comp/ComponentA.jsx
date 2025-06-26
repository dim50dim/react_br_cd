import ComponentB from "./ComponentB";

export default function ComponentA(){
    return(
        <>
           <div className="box">
                   <h1>Component A</h1>
                   <ComponentB/>
           </div>
        </>
    )
}