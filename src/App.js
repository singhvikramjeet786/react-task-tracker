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

   //fetch single task
   const fetchTask = async (id) => {
    //url of our local server db we created using jsonserver
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()
    console.log(data)
    return data
  }

  //Add task
  const addTask = async (task) => {
    console.log(task)

    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type':'application/json',
      },
      body: JSON.stringify(task),
    })
    const data = await res.json()
    
    setTasks([...taskList, data])

    // const id = Math.floor(Math.random() * 10000) + 1
    // const newTask = { id, ...task }
    // setTasks([...taskList, newTask])
  }
  //delete Task function
  const deleteTask = async (id) => {
    console.log('Delete', id);
    await fetch(`http://localhost:5000/tasks/${id}`,{
      method: 'DELETE',
    })
    setTasks(taskList.filter((task) => task.id !== id))
  }

  //Toggle reminder for tasks
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updatedTask = {...taskToToggle, reminder: !taskToToggle.reminder}
    const res = await fetch(`http://localhost:5000/tasks/${id}`,{
      method:'PUT',
      headers: {
        'Content-type':'application/json',
      },
      body: JSON.stringify(updatedTask)
    })

    const data = await res.json()
    console.log("toggle", id);
    setTasks(taskList.map((task) =>
      task.id === id ? { ...task, reminder: data.reminder } : task
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
