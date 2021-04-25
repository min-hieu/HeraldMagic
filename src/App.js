import './App.css';
import Header from './Header.js';
import Canvas from './Canvas.js';
import Config from './Config.js';
import './Fabric-customize.js';
import { useState } from "react";

function App() {
  const [color, setColor] = useState("#aabbcc");

  return (
    <div className="App">
      <Header />
      <div id="App-Body">
        <Config colorState={[color, setColor]}/>
        <Canvas colorState={[color, setColor]}/>
      </div>
    </div>
  );
}

export default App;
