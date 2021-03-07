import Reactik from "./reactic";

/** @jsx Reactik.createElement */
const container = document.getElementById("root");

const App = () => {
  function Counter() {
    const [state, setState] = Reactik.useState(1);

    Reactik.useEffect(() => {
      console.log(state);
    }, [state]);

    Reactik.useEffect(() => {
      console.log("Component did mount.");
    }, []);

    return (
      <div>
        <h1>State: {state}</h1>
        <button onClick={() => setState(c => c + 1)}>Increment</button>
        <button onClick={() => setState(c => c - 1)}>Decrement</button>
      </div>
    );
  }
  const element = <Counter />;
  Reactik.render(element, container);
};

App();
