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
   
        </>
    )
}