import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import toggleSlice, { toggler } from './features/toggleSlice';
import counterSlice, {
  increment,
  decrement,
  reset,
} from './features/counterSlice';

function App() {
  const count = useSelector((store) => store.count.value);
  const toggle = useSelector((store) => store.toggle.boolean);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <p>Counter: {count}</p>
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <button type="button" onClick={() => dispatch(decrement())}>
            Decrement
          </button>
          <button type="button" onClick={() => dispatch(increment())}>
            Increment
          </button>
          <button type="button" onClick={() => dispatch(reset())}>
            Reset
          </button>
        </div>
        <div>
          <div>
            <button type="button" onClick={() => dispatch(toggler())}>
              Show
            </button>
            <div>
              {toggle ? (
                <ul>
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                  <li>4</li>
                  <li>5</li>
                </ul>
              ) : null}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
