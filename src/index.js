import Reactik from "./reactic";

/** @jsx Reactik.createElement */
const container = document.getElementById("root");

const updateValue = e => {
  App(e.target.value);
};

const App = value => {
  const element = (
    <div>
      <h2>My favourite language is {value}</h2>
      <label htmlFor="languages">Choose your favourite language: </label>
      <select onChange={updateValue} name="languages" id="languages">
        <option value="Java Script">Java Script</option>
        <option value="Coffee Script">Coffee Script</option>
        <option value="Type Script">Type Script</option>
      </select>
      <div>
        <input
          type="checkbox"
          id="joke"
          name="joke"
          checked={value === "Coffee Script"}
          disabled={true}
        />
        <label htmlFor="joke">I'm joking</label>
      </div>
    </div>
  );
  Reactik.render(element, container);
};

App("Dart");
