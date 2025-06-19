
import './App.css'
import Student from './components/Student'

function App() {


  return (
    <>
<Student name='Mike' age={15} isStudent={true} />
<Student name='Tom' age={24} isStudent={false} />
<Student name='John' age={65} isStudent={true} />
<Student name='Sarah' age={45} isStudent={false} />
    </>
  )
}

export default App
