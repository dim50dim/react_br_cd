import {  useState } from "react";

export default function MyComponent() {
     const [cars,setCars] = useState([]);
     const [carYear,setCarYear] = useState(new Date().getFullYear());
     const [carMake, setCarMake] = useState('');
     const [carModel, setCarModel] = useState('');

     function handleAddCar(){
      
     }
     function handleRemoveCar(index){

     }
     function handleYearChange(e){
      
     }
     function handleMakeChange(e){

     }
     function handleModelChange(e){

     }
    return (
      <>

      </>
    )
      
}