import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AppTodo";
import Todos from "./components/Todos";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-6xl font-bold underline">Run about Redux Tool Kit</h1>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
