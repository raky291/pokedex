import Card from "../../atoms/Card/Card";
import PokemonType from "../../atoms/PokemonType/PokemonType";

interface PokemonCardProps {
  name: string;
}

export function PokemonCard({ name }: PokemonCardProps) {
  return (
    <Card>
      <div className="row">
        <div className="col-md-5 my-1">
          <div className="d-flex align-items-center justify-content-center h-100">
            <span>#001</span>
            <span>Bulbasaur</span>
          </div>
        </div>
        <div className="col-md-7 my-1">
          <div className="d-flex justify-content-center justify-content-md-end">
            <button type="button" className="btn btn-primary">
              Primary
            </button>
          </div>
        </div>
        <div className="col-md-5 my-1">
          <div className="d-flex justify-content-center">image</div>
        </div>
        <div className="col-md-7 my-1">
          <div className="d-flex justify-content-center">details</div>
        </div>
        <div className="col-md-5 my-1">
          <div className="d-flex justify-content-center">
            <PokemonType type="normal" />
            <PokemonType type="fighting" />
          </div>
        </div>
        <div className="col-md-7 my-1">
          <div className="d-flex justify-content-center justify-content-md-end">
            <a
              href="https://bulbapedia.bulbagarden.net/wiki/Bulbasaur_(Pok%C3%A9mon)"
              target="_blank"
              rel="noreferrer"
            >
              Bulbapedia
            </a>
          </div>
        </div>
      </div>
    </Card>
  );
}
