import { ContadorRed } from "./components/ContadorRed";
import Counter from "./components/Counter";
import { TimerPadre } from "./components/TimerPadre";
import { Usuario } from "./components/Usuario";

function App() {
  return (
    <>
      <h2>UseState</h2>
      <hr />
      <Counter />
      <Usuario />

      <h2>UseEffect + UseRef </h2>
      <hr />
      <TimerPadre />
      <h2>UserReducer </h2>
      <hr />
      <ContadorRed/>
    </>
  );
}

export default App;
