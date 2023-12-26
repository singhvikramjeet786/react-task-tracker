import AddTask from './components/AddTask.js';
import Header from './components/Header.js';
import Tasks from './components/Tasks.js';
import { useState } from "react"

function App() {
  // const name = "Vikram";
  const [taskList, setTasks] = useState([
    {
      id: 1,
      text: 'Buy Furnitures',
      day: 'Dec 28th at 11am',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meeting at School',
      day: 'Jan 28th at 9am',
      reminder: false,
    },
    {
      id: 3,
      text: 'Food Shopping',
      day: 'Dec 30th at 1pm',
      reminder: true,
    },
    {
      id: 4,
      text: 'House Cleaning',
      day: 'Jan 3th at 3pm',
      reminder: true,
    }
  ]);
  
  //Add task
  const addTask= (task) =>{
    console.log(task)
    const id = Math.floor(Math.random() * 10000) +1

    const newTask = {id, ...task}
    setTasks([...taskList, newTask])
  }
  //delete Task function
  const deleteTask = (id) =>{
    console.log('Delete',id);
    setTasks(taskList.filter((task)=>task.id !== id))
  }

  //Toggle reminder for tasks
  const toggleReminder = (id) => {
    console.log("toggle", id);
    setTasks(taskList.map((task)=>
      task.id === id ? {...task, reminder:!task.reminder} : task
    ))
  }
  return (
    <div className="container">
      <Header title="Task Tracker" />
      <AddTask onAdd={addTask}/>
      {taskList.length > 0 ? (<Tasks tasks={taskList} onDelete={deleteTask} onToggle={toggleReminder}/>
      ) : (<p>No Tasks to Show</p>
    )}
      {/* <Header title={1}/> */}
    </div>
  );
}

export default App;
