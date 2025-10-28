import "./App.css";
import { useState } from "react";
import CounterDisplay from "./components/CounterDisplay";
import CounterButtons from "./components/CounterButtons";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>Simple Counter App</h1>
      <CounterDisplay value={count} />
      <CounterButtons
        onIncrement={() => setCount(count + 1)}
        onDecrement={() => setCount(count - 1)}
      />
    </div>
  );
}

export default App;
