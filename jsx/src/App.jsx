import './App.css';

function App() {
  const tasks = 10;
  const completed = 5;


  return (
  
    <div style={{backgroundColor:'violet', margin:'10px'}}>
      <h1>My Task List</h1>
      <p>Total Tasks: {tasks}</p>
      <p>Completed Tasks: {completed}</p>
    </div>
  );
}

export default App;
