import "./App.css";
import config from "./config/config.js";
function App() {
  console.log(config.APPWRITE_URL);

  return (
    <h1 className="text-center text-rose-700 text-6xl ">
      A Blog and Portfolio app with app write
    </h1>
  );
}

export default App;
