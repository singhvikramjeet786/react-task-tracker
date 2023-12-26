import Header from './components/Header.js';
import Tasks from './components/Tasks.js';

function App() {
  const name = "Vikram";
  return (
    <div className="container">
      <Header title="Task Tracker"/>
      <Tasks/>
      {/* <Header title={1}/> */}
    </div>
  );
}

export default App;
