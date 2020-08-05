import React, { useState } from "react";
import "./App.css";

function App() {
  const [graph, setGraph] = useState([200, 400, 100, 800, 300]);

  const merge = (left, right) => {
    let resultArray = [], leftIndex = 0, rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        console.log(`left index: ${left[leftIndex]}`)
        resultArray.push(left[leftIndex]);
        leftIndex++;
      } else {
        console.log(`right index: ${right[rightIndex]}`)
        resultArray.push(right[rightIndex]);
        rightIndex++;
      }
    }


    return resultArray
      .concat(left.slice(leftIndex))
      .concat(right.slice(rightIndex));
  }

  const mergeSort = (unsortedArray) => {
    if (unsortedArray.length <= 1) {
      return unsortedArray;
    }
    const middle = Math.floor(unsortedArray.length / 2);

    const left = unsortedArray.slice(0, middle);
    const right = unsortedArray.slice(middle);

    return merge(
      mergeSort(left), mergeSort(right)
    );
  }

  const handleClick = () => {
    mergeSort(graph)
  }

  return <div className="App">
    <button onClick={handleClick}>Start visual</button>
    <div className="container" style={{ display: 'flex', flexFlow: 'row', justifyContent: 'center' }}>
      {graph.map((item, index) => (
        <div style={{ width: 20, height: item, backgroundColor: '#87CEFA', border: '1px solid black' }} key={index} />
      ))}
    </div>

  </div>;
}

export default App;
