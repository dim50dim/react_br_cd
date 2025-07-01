import {  useState } from "react"

export default function MyComponent() {
    const [name, setName] = useState('Max');
    const [age,setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);
    const isWorking = () => setIsEmployed(!isEmployed);
    const updateName =() => setName('John Doy');
    const incrementAge =() => setAge(age + 2);
    return (
        <>
            <div>
                <p> Name: {name} </p>
                <button onClick={updateName} >Set Name</button>
            </div>
            <div>
                <p> Age: {age} </p>
                <button onClick={incrementAge} >Set Age</button>
            </div>
            <div>
                <p> Is Employed: {isEmployed ? 'Yes' : 'No'} </p>
                <button onClick={isWorking} >Set Status</button>
            </div>
        </>
    )
}