import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <p>Counter :</p>
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button type="button">Decrement</button>
        <button type="button">Increment</button>
      </header>
    </div>
  );
}

export default App;
