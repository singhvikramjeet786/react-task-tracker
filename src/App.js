import { useState, useEffect } from "react"
import AddTask from './components/AddTask.js';
import Header from './components/Header.js';
import Tasks from './components/Tasks.js';

function App() {
  // const name = "Vikram";
  const [taskList, setTasks] = useState([]);

  const [showAddTask, setShowAddTask] = useState(false);

  //used on pageLoad
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer)
    }
    getTasks()
  }, [])

  //fetch tasks
  const fetchTasks = async () => {
    //url of our local server db we created using jsonserver
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    console.log(data)
    return data
  }

  //Add task
  const addTask = (task) => {
    console.log(task)
    const id = Math.floor(Math.random() * 10000) + 1

    const newTask = { id, ...task }
    setTasks([...taskList, newTask])
  }
  //delete Task function
  const deleteTask = (id) => {
    console.log('Delete', id);
    setTasks(taskList.filter((task) => task.id !== id))
  }

  //Toggle reminder for tasks
  const toggleReminder = (id) => {
    console.log("toggle", id);
    setTasks(taskList.map((task) =>
      task.id === id ? { ...task, reminder: !task.reminder } : task
    ))
  }
  return (
    <div className="container">
      <Header title="Task Tracker" showAdd={showAddTask} onAdd={() => setShowAddTask(!showAddTask)} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {taskList.length > 0 ? (<Tasks tasks={taskList} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (<p>No Tasks to Show</p>
      )}
      {/* <Header title={1}/> */}
    </div>
  );
}

export default App;
