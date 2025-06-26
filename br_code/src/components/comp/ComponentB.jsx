import ComponentC from "./ComponentC";

export default function ComponentB(props) {
    return (
        <>
          <div className="box">
            <h1>Component B</h1>
            <ComponentC user={props.user}/>
          </div>
        </>
    )
}