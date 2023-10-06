import "./App.css";
import Card from "./components/card";

function App() {
  let myObj = {
    username: "nk",
    age: 21,
  };
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind Test
      </h1>
      <Card username="nk" btnText="click me" />
      <Card username="nalin" btnText="visit me" />
    </>
  );
}

export default App;
