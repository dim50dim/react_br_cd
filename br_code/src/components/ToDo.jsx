import { useState } from "react";

export default function ToDo() {
    const [tasks,setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    function handleInputChange(e){

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
                <input type="text" />
            </div>
           </div>
        </>
    )
}