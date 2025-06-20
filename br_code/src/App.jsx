
import './App.css'
import List from './components/List'
import Student from './components/Student'
import UserGreeting from './components/UserGreeting'

function App() {
    const fruits = [
        {id:1,name:'apple',calories: 44,price:11},
        {id:2,name: 'orange',calories: 33,price: 123},
        {id:3,name: 'banana',calories: 66,price: 55},
        {id:4,name: 'pineapple',calories:22,price:111},
    ]


        const vegetables = [
        {id:5,name:'potatoes',calories: 144,price:88},
        {id:6,name: 'celery',calories: 33,price:99},
        {id:7,name: 'carrots',calories: 366,price: 103},
        {id:8,name: 'corn',calories:422,price: 909},
    ]

  return (
    <>
      <List items={fruits} category='Fruits'  />  
     <List items={vegetables} category='Vegetables'/> 
    </>
  )
}

export default App
