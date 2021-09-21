import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App(props) {
  // props are read only!
  // props.name = 'bar';

  // this uses array destructuring
  const [count, setCount] = useState(0);
  const [liked, setLiked] = useState(false);


  // the same but explicit
  // const state = useState(0);
  // const count = state[0];
  // const setCount = state[1];
  // useState returns an array
  // const state = useState(5);
  // console.log(state[0]);

  const clickHandler = () => {
    // increment the state of count by 1
    // count = 2; ❌ don't mutate state directly
    setCount(count + 1);
  }

  const likeHandler = () => setLiked(!liked)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello {props.name}</h1>
        <h1>Counter: {count}</h1>
        <h1>{liked ? 'I like it 👍' : 'I do not like it 👎'}</h1>
        <button onClick={clickHandler}>Click Me 👇</button>
        <button onClick={likeHandler}>{liked ? 'Unlike' : 'Like'}</button>
      </header>
    </div>
  );
}

export default App;
