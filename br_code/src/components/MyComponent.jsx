import { useState } from "react"

export default function MyComponent() {
    const [name, setName] = useState();
    const updateName =() => setName('John Doy');
    return (
        <>
            <div>
                <p> Name: {name} </p>
                <button onClick={updateName} >Set Name</button>
            </div>
        </>
    )
}