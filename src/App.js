import React from 'react';
import Tooltip from './Tooltip';
import './App.css'

function App() {
  const positions = ['top', 'bottom', 'right', 'left'];

  return (
    <div className="App">
      <Tooltip positions={positions}>
        <button>Hover over me</button>
      </Tooltip>
    </div>
  );
}

export default App;