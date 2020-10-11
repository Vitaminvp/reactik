import Reactik from "./reactic";

/** @jsx Reactik.createElement */
const container = document.getElementById("root");

const updateValue = ({ target: { value } }) => {
  App(value);
};

const App = value => {
  const element = (
    <div>
      <h2>My favourite language is {value}</h2>
      <div>
        <label htmlFor="languages">Choose your favourite language: </label>
        <select onChange={updateValue} name="languages" id="languages">
          <option value="Java Script" selected={"Java Script" === value}>
            Java Script
          </option>
          <option value="Coffee Script" selected={"Coffee Script" === value}>
            Coffee Script
          </option>
          <option value="Type Script" selected={"Type Script" === value}>
            Type Script
          </option>
        </select>
      </div>
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

App("Java Script");
