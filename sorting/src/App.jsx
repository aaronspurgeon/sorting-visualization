import React, { useState } from "react";
import "./App.css";

function App() {
  const [graph, setGraph] = useState([200, 400, 100, 800, 300]);

  const sort = (graph) => {
    let newGraph = new Array(5).fill(0)
    for (let i = 0; i <= 5; i++) {
      console.log(graph[i])
      if (graph[i].value > graph[i + 1].value) {
        let temp = graph[i]
        graph[i] = graph[i + 1]
        graph[i + 1] = temp
      }
    }
  }

  const handleClick = () => {

  }

  return <div className="App">
    <button>Start visual</button>
    <div className="container" style={{ display: 'flex', flexFlow: 'row', justifyContent: 'center' }}>
      {graph.map((item, index) => (
        <div style={{ width: 20, height: item, backgroundColor: '#87CEFA', border: '1px solid black' }} key={index} />
      ))}
    </div>

  </div>;
}

export default App;
