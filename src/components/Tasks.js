const taskList = [
    {
        id:1,
        text: 'Buy Furnitures',
        day:'Dec 28th at 11am',
        reminder: true,
    },
    {
        id:2,
        text: 'Meeting at School',
        day:'Jan 28th at 9am',
        reminder: false,
    },
    {
        id:3,
        text: 'Food Shopping',
        day:'Dec 30th at 1pm',
        reminder: true,
    },
    {
        id:4,
        text: 'House Cleaning',
        day:'Jan 3th at 3pm',
        reminder: true,
    }
]

const Tasks = () => {
  return (
    <>
        {taskList.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
        ))}
    </>
  )
}

export default Tasks