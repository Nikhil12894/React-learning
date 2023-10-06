import { useState } from "react";
import BGButton from "./components/BGButton.jsx";

function App() {
  const [color, setColor] = useState("gray");

  const colorsList = [
    {
      color: "red",
      className: "bg-red-600 hover:bg-red-600/80 focus-visible:outline-red-600",
    },
    {
      color: "yellow",
      className:
        "bg-yellow-600 hover:bg-yellow-600/80 focus-visible:outline-yellow-600",
    },
    {
      color: "green",
      className:
        "bg-green-600 hover:bg-green-600/80 focus-visible:outline-green-600",
    },
    {
      color: "gray",
      className:
        "bg-gray-600 hover:bg-gray-600/80 focus-visible:outline-gary-600",
    },
    {
      color: "orange",
      className:
        "bg-orange-600 hover:bg-orange-600/80 focus-visible:outline-orange-600",
    },
    {
      color: "lime",
      className:
        "bg-lime-600 hover:bg-lime-600/80 focus-visible:outline-lime-600",
    },
    {
      color: "emerald",
      className:
        "bg-emerald-600 hover:bg-emerald-600/80 focus-visible:outline-emerald-600",
    },
    {
      color: "amber",
      className:
        "bg-amber-600 hover:bg-amber-600/80 focus-visible:outline-amber-600",
    },
    {
      color: "teal",
      className:
        "bg-teal-600 hover:bg-teal-600/80 focus-visible:outline-teal-600",
    },
    {
      color: "cyan",
      className:
        "bg-cyan-600 hover:bg-cyan-600/80 focus-visible:outline-cyan-600",
    },
    {
      color: "sky",
      className: "bg-sky-600 hover:bg-sky-600/80 focus-visible:outline-sky-600",
    },
    {
      color: "blue",
      className:
        "bg-blue-600 hover:bg-blue-600/80 focus-visible:outline-blue-600",
    },
    {
      color: "indigo",
      className:
        "bg-indigo-600 hover:bg-indigo-600/80 focus-visible:outline-indigo-600",
    },
    {
      color: "violet",
      className:
        "bg-violet-600 hover:bg-violet-600/80 focus-visible:outline-violet-600",
    },
    {
      color: "purple",
      className:
        "bg-purple-600 hover:bg-purple-600/80 focus-visible:outline-purple-600",
    },
    {
      color: "fuchsia",
      className:
        "bg-fuchsia-600 hover:bg-fuchsia-600/80 focus-visible:outline-fuchsia-600",
    },
    {
      color: "pink",
      className:
        "bg-pink-600 hover:bg-pink-600/80 focus-visible:outline-pink-600",
    },
    {
      color: "rose",
      className:
        "bg-rose-600 hover:bg-rose-600/80 focus-visible:outline-rose-600",
    },
  ];
  function backGraound(c) {
    return `bg-${c}-600`;
  }

  return (
    <div className={`w-full h-screen duration-200 ${backGraound(color)}`}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <BGButton
            coloraList={colorsList}
            onColerChange={(c) => setColor(c)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
