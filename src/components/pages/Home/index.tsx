import { Footer } from "../../templates/Footer";
import { Header } from "../../templates/Header";
import { Pokedex } from "../../templates/Pokedex";

export function Home() {
  return (
    <div>
      <Header />
      <Pokedex />
      <Footer />
    </div>
  );
}
