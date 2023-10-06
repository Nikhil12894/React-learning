function setAttributeToDom(props, domElement) {
  for (const key of Object.keys(props)) {
    if (key == "children") continue;
    domElement.setAttribute(key, props[key]);
  }
}

function customRender(reactElement, container) {
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  setAttributeToDom(reactElement.props, domElement);
  container.appendChild(domElement);
}
const reactElement = {
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "_blank",
  },
  children: "click me to visit google",
};

const root = document.getElementById("root");

customRender(reactElement, root);
