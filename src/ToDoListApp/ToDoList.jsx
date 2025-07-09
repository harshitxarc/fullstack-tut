import React, {useState} from 'react';
import './ToDoList.css';

function ToDoList(){

    const [tasks, setTasks] = useState(["Buy Groceries", "Walk the Dog", "Read a Book"]);
    const [newTask, setNewTask] = useState();

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(event){}

    function deleteTask(index){}

    function moveUpTask(index){}

    function moveDownTask(index){}

    return(
        <div className = "to-do-list">
            <h1>To-Do-List</h1>
            <div>
                <input 
                    type="text" 
                    placeholder='Enter a Task...'
                    value={newTask}
                    onChange={handleInputChange}/>
                <button className='add-button' onClick={addTask}>Add</button>
            </div>
            <ol>
                {tasks.map((task, index) =>
                <li key={index}>
                    <span className='text'>{task}</span>
                    <button 
                        className="delete-button" 
                        onClick={() => deleteTask(index)}>Delete</button> 
                    <button 
                        className="up-button" 
                        onClick={() => moveUpTask(index)}>⬆️</button> 
                    <button 
                        className="down-button" 
                        onClick={() => moveDownTask(index)}>⬇️</button> 
                </li>
                )}
            </ol>
        </div>
    );
}

export default ToDoList;