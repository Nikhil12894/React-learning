import { useState } from "react";
import UserContextProvider from "./context/UserContextProvider";
import Login from "./components/Login";
import Profile from "./components/Profile";
import "./App.css";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>React context management using context api</h1>
      <UserContextProvider>
        <Login />
        <Profile />
      </UserContextProvider>
    </>
  );
}

export default App;
