import React, { useState } from "react";
import "./App.css";

function App() {
  const [graph, setGraph] = useState([
    {
      key: 1,
      value: 20,
    },
    {
      key: 2,
      value: 40,
    },
    {
      key: 3,
      value: 10,
    },
    {
      key: 4,
      value: 80,
    },
    {
      key: 5,
      value: 30,
    },
  ]);

  return <div className="App">
    <div className="container" style={{ display: 'flex', flexFlow: 'row' }}>
      {graph.map((item) => (
        <div style={{ textAlign: 'center' }} key={item.key}>{item.value}</div>
      ))}
    </div>

  </div>;
}

export default App;
