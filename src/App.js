import './App.css';
import Header from './Header.js';
import Canvas from './Canvas.js';
import Config from './Config.js';
import './Fabric-customize.js';

function App() {

  return (
    <div className="App">
      <Header />
      <div id="App-Body">
        <Config />
        <Canvas />
      </div>
    </div>
  );
}

export default App;
