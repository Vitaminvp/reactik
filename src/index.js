import Reactik from "./reactic";

/** @jsx Reactik.createElement */
const container = document.getElementById("root");

const App = (text, value) => {
  const element = (
    <div>
      <h2>My favourite language is {text}</h2>
      <div>
        <label htmlFor="languages">Choose your favourite language: </label>
        <select
          onChange={({ target: { value: newText } }) => App(newText, value)}
          name="languages"
          id="languages"
        >
          <option value="Java Script" selected={"Java Script" === text}>
            Java Script
          </option>
          <option value="Coffee Script" selected={"Coffee Script" === text}>
            Coffee Script
          </option>
          <option value="Type Script" selected={"Type Script" === text}>
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
      <div>
        <input
          onInput={({ target: { value: newValue } }) => App(text, newValue)}
          value={value}
        />
        <h2>Hello {value}</h2>
      </div>
    </div>
  );
  Reactik.render(element, container);
};

App("Java Script");
