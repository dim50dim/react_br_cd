import { useState } from "react";

export default function MyComponent() {
    const [name,useName] = useState('Bob');
    const [age,setAge] = useState(0)
    const [isEmployed, setIsEmployed]  = useState(false);
  function updateName(){
    useName('Max')
  }
  const incrementAge  = () => setAge(age +1);
  const toggleEmployedStatus = () => setIsEmployed(!isEmployed)

    return (
        <>
        <div>
            <p>Name : {name} </p>
            <button onClick={updateName}>Set Name</button>
        </div>
        <div>
            <p>Age: {age} </p>
            <button onClick={incrementAge}>Set AGE</button>
        </div>
        <div>
            <p> Employed: {isEmployed ? 'Yes' : 'NO'} </p>
            <button onClick={toggleEmployedStatus}>Toggle Status</button>
        </div>
        </>
    )
}