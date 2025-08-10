import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>🚀 Mon premier site 2025</h1>
        <p>Compteur : {count}</p>
        <button onClick={() => setCount(count + 1)}>+1</button>
      </header>
    </div>
  );
}

export default App;
