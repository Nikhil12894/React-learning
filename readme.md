# React-learning

  *[React Fiber](https://github.com/acdlite/react-fiber-architecture/blob/master/README.md)* is a completely backward-compatible rewrite of the old reconciler. 

#### interview related

  ```jsx
  /* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(15);

  // const [counter, nk] = useState(15); // this can also be used
  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);//<-|
      setCounter(counter + 1);//  |
      setCounter(counter + 1);//  | will increase the count only once since all this method setting same count value and in react call happens in baches
      setCounter(counter + 1);//  |
      setCounter(counter + 1);//  |
      setCounter(counter + 1);//<-|
      setCounter((prevCounter) => prevCounter + 1); // basically it equal to setCounter((prevCounter) => { return prevCounter + 1})
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
    }
  };
  const remove = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <>
      <h1> React practice</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={remove}>remove value {counter}</button>
    </>
  );
}

export default App;
  ```