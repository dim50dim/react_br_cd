import {  useState } from "react";

export default function MyComponent() {
     const [cars,setCars] = useState([]);
     const [carYear,setCarYear] = useState(new Date().getFullYear());
     const [carMake, setCarMake] = useState('');
     const [carModel, setCarModel] = useState('');

     function handleAddCar(){
         const newCar = {year: carYear, make: carMake, model: carModel};
         setCars(c => [...c,newCar]);
         setCarYear(new Date().getFullYear())
     }
     function handleRemoveCar(index){

     }
     function handleYearChange(e){
      setCarMake(e.target.value)
     }
     function handleMakeChange(e){
    setCarMake(e.target.value)
     }
     function handleModelChange(e){
           setCarMake(e.target.value)
     }
    return (
      <>
            <div>
              <h2>List of Car Object</h2>
              <ul>
           {cars.map((elem,i) => 
           <li key={i}> {elem.year}  {elem.make} {elem.model} </li> )}
              </ul>
              <input type="number" value={carYear}  onChange={handleYearChange}/><br />
              <input type="text" value={carMake}  onChange={handleMakeChange} placeholder="enter car make"/><br />
              <input type="text" value={carModel}  onChange={handleModelChange} placeholder="enter car model"/><br />
              <button onClick={handleAddCar}> Add car</button>
            </div>
      </>
    )
      
}