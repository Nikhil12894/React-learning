import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-wrap min-h-screen items-center w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="w-full">
        <h1 className="text-center text-rose-500">
          TODO app with using context api and local storage
        </h1>
      </div>
    </div>
  );
}

export default App;
