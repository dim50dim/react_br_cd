import ComponentB from './ComponentB.jsx';

export default function ComponentA() {
    return (
        <>
         <div className="box">
                   <h1>ComponentA</h1>
                   <ComponentB/>
         </div>
        </>
    )
}