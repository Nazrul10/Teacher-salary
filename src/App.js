//css import
import './App.css';
import Teachers from './Components/Teachers/Teachers';
//main component
function App() {
  return (
    <div className="app-bg">
      <div className="App">
      <h1>Our best Teacher's</h1>
      <h3>This website are display best teacher of the world</h3>
      <h3>Every month our theacher's Budget: 10M</h3>
      </div>
      <Teachers></Teachers>
    </div>
  );
}

export default App;
