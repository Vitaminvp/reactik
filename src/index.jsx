import Reactik from './reactic';
/** @jsx Reactik.createElement */
const element2 = (
    <div>
      <h3>Hello World2</h3>
      <h2>from Didact {5+ Math.random()}</h2>
    </div>
);

/** @jsx Reactik.createElement */
const element = (
  <div>
    <h1>Hello World</h1>
    <h2>from {element2}</h2>
  </div>
);


const container = document.getElementById("root");
Reactik.render(element, container);
