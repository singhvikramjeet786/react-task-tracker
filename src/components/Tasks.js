import Task from "./Task"

const Tasks = ({tasks, onDelete}) => {
    

  return (
    // setTasks([...taskList, {id:5,text:"VIK",day:"test",reminder:true}])
    <>
        {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete}/>
        ))}
    </>
  )
}

export default Tasks