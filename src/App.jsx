import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { toggler } from './features/toggleSlice';
import { increment, decrement, reset } from './features/counterSlice';
import { useEffect } from 'react';
import { getPopularFilms } from './features/filmListSlice';

function App() {
  const count = useSelector((store) => store.count.value);
  const toggle = useSelector((store) => store.toggle.boolean);
  const popularFilmList = useSelector((store) => store.films.popularFilmList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularFilms());
  }, [dispatch]);
  return (
    <div className="App">
      <button type="button">Load more</button>
      <div>
        <ul>
          {popularFilmList &&
            popularFilmList.map((popularFilm) => {
              return (
                <div key={popularFilm.id}>
                  <div>
                    <p>{popularFilm.original_title}</p>
                  </div>
                </div>
              );
            })}
        </ul>
      </div>
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
