
import './App.css'
import List from './components/List'
import Student from './components/Student'
import UserGreeting from './components/UserGreeting'

function App() {
    const fruits = [
        {id:1,name:'apple',calories: 44},
        {id:2,name: 'orange',calories: 33},
        {id:3,name: 'banana',calories: 66},
        {id:4,name: 'pineapple',calories:22},
    ]
    const vegetables = [
        {id:5,name:'potatoes',calories: 144},
        {id:6,name: 'celery',calories: 33},
        {id:7,name: 'carrots',calories: 366},
        {id:8,name: 'corn',calories:422},
    ]

  return (
    <>
     <List items={fruits} category='Fruits and not Vegetables' />
     <List item={vegetables} category='Vegetables'/>
    </>
  )
}

export default App
