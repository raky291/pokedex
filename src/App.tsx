import "./App.css";
import { Pokedex } from "./components/templates/Pokedex";
import "./styles/main.scss";

export function App() {
  return (
    <div className={"app"}>
      <Pokedex />
    </div>
  );
}
