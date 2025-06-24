import { useState } from "react";

export default function ToDo() {
    const [tasks,setTasks] = useState(['eat breakfast','take a shower']);
    const [newTask, setNewTask] = useState('');

    function handleInputChange(e){
       setNewTask(e.target.value);
    }
    function addTask(){

    }
    function deleteTask(inde){

    }
    function moveTask(index){

    }
    return (
        <>
           <div className="to-do-list">
            <h1>To-Do-list</h1>
            <div>
                <input type="text" placeholder="enter a task" value={newTask} onChange={handleInputChange} />
            </div>
            <button className="add-button" onClick={addTask} > Add task</button>
           </div>
           <ol>
            {tasks.map((task,i) => 
                  <li key={i} >
                    <span className="text">{task}</span>
                    <button className="delete-button" onClick={() => deleteTask(i)}>Delete</button>
                  </li>
             )}
           </ol>
        </>
    )
}