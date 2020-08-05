import React, { useState } from "react";
import "./App.css";

function App() {
  const [graph, setGraph] = useState([
    {
      key: 1,
      value: 200,
    },
    {
      key: 2,
      value: 400,
    },
    {
      key: 3,
      value: 100,
    },
    {
      key: 4,
      value: 800,
    },
    {
      key: 5,
      value: 300,
    },
  ]);

  return <div className="App">
    <div className="container" style={{ display: 'flex', flexFlow: 'row', justifyContent: 'center' }}>
      {graph.map((item) => (
        <div style={{ width: 20, height: item.value, backgroundColor: 'purple', border: '1px solid black' }} key={item.key} />
      ))}
    </div>

  </div>;
}

export default App;
