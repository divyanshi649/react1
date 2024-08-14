import React from 'react';
import JsonRenderer from './component/JsonRenderer';
import jsonData from './data/data.json'; // Make sure to adjust the path accordingly

function App() {
  return (
    <div className="App">
      <JsonRenderer data={jsonData} />
    </div>
  );
}
export default App;