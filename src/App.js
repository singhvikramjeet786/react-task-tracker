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
  
  //delete Task function
  const deleteTask = (id) =>{
    console.log('Delete',id);
    setTasks(taskList.filter((task)=>task.id !== id))
  }

  return (
    <div className="container">
      <Header title="Task Tracker" />
      {taskList.length > 0 ? <Tasks tasks={taskList} onDelete={deleteTask}/> : <p>No Tasks to Show</p>}
      {/* <Header title={1}/> */}
    </div>
  );
}

export default App;
