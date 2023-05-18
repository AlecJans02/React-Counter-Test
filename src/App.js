import './App.css';
import {React, useState }from 'react';

function App() {


const [Counter, setCounter] = useState(0);

const addNum = () => {
  setCounter(Counter + 1);
}

const resetNum = () => {
  setCounter(0);
}

const doubleNum = () => {
  setCounter(Counter * 2);
}

  return (
    <div className="App">
      <h1>React Counter</h1>
      <h1>{Counter}</h1>
      <button onClick={addNum}>Add One</button>
      <h1></h1>
      <button onClick={resetNum}>Reset Counter</button>
      <h1></h1>
      <button onClick={doubleNum}>Double Number</button>
    </div>
  );
}

export default App;
