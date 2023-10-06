import { useState } from "react";
import BGButton from "./components/BGButton.jsx";

function App() {
  const [color, setColor] = useState("olive");

  const colors = ["red", "yellow", "green"];

  function getClassName(c) {
    return `bg-${c}-600 hover:bg-${c}-600/80 focus-visible:outline-${c}-600`;
  }

  return (
    // <>
    //   <BGButton />
    // </>
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          {/* <button
            onClick={() => setColor("yellow")}
            type="button"
            class="rounded-xl bg-yellow-600 px-4 py-1 text-xs font-semibold text-white shadow-sm hover:bg-yellow-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("green")}
            type="button"
            class="rounded-xl bg-green-600 px-4 py-1 text-xs font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          >
            Green
          </button>
          <button
            onClick={() => setColor("red")}
            type="button"
            class="rounded-xl bg-red-600 px-4 py-1 text-xs font-semibold text-white shadow-sm hover:bg-red-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          >
            Red
          </button>
          <button
            onClick={() => setColor("black")}
            type="button"
            class="rounded-3xl bg-black px-4 py-1 text-xs font-semibold text-white shadow-sm hover:bg-gray-900/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-800"
          >
            Black
          </button> */}

          {colors.map((c, i) => (
            <button
              key={i}
              onClick={() => setColor(c)}
              type="button"
              // class="rounded-3xl px-4 py-1 text-xs font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              className={
                getClassName(c) +
                " rounded-3xl px-4 py-1 text-xs font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              }
            >
              {c}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
