import { Greatint } from "./components/Greatint";
import { ChildGreating } from "./components/ChildGreating";
import Counter from "./components/Counter";

import './App.css'

function App() {
  return (
    <>
      <Greatint message="Hello world" />
      <ChildGreating>Hello React</ChildGreating>
      <Counter />
    </>
  );
}

export default App;
