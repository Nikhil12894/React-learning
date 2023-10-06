import Test from "./Test";

function App() {
  const username = "Nalin Kumar"; // evaluated expiation
  return (
    <>
      <Test />
      <h3>
        hello from app with variable user name <i>{username}</i>!
      </h3>
    </>
  );
}

export default App;
