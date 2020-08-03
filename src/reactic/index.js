const createElement = (type, props, ...children) => ({
  type,
  props: {
    ...props,
    children: children.map(child =>
      typeof child === "object" ? child : createTextElement(child)
    )
  }
});

const createTextElement = text => ({
  type: "TEXT_ELEMENT",
  props: {
    nodeValue: text,
    children: []
  }
});

const render = ({ type, props }, container) => {
  const dom =
    type === "TEXT_ELEMENT"
      ? document.createTextNode("")
      : document.createElement(type);

  Object.keys(props)
    .filter(key => key !== "children")
    .forEach(name => {
      dom[name] = props[name];
    });
  props.children.forEach(child => render(child, dom));
  container.appendChild(dom);
};

const Reactik = {
  createElement,
  render
};

export default Reactik;
