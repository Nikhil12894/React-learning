import ReactDOM from "react-dom/client";
import React from "react";

import App from "./App.jsx";
// function MyApp() {
//   return <h3>Custom App !!</h3>;
// }
// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://www.google.com",
//     target: "_blank",
//   },
//   children: "click me to visit google",
// };
// const anotherElement = (
//   <a href="https://www.google.com" target="_blank">
//     visit google
//   </a>
// );
// const anotherVariable = " test variable";
// const reactElement = React.createElement(
//   "a",
//   { href: "https://github.com", target: "_blank" },
//   "click me visit google",
//   anotherVariable // evaluated expiation
// );

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
