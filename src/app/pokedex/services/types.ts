export interface ApiResponse {
  data: Data;
}

export interface Data {
  pokemon_v2_pokemon: PokemonV2Pokemon[];
}

export interface PokemonV2Pokemon {
  id: number;
  name: string;
  pokemon_v2_pokemontypes: PokemonV2Pokemontype[];
  pokemon_v2_pokemonsprites: PokemonV2Pokemonsprite[];
}

export interface PokemonV2Pokemontype {
  pokemon_v2_type: PokemonV2Type;
}

export interface PokemonV2Type {
  id: number;
  name: string;
}

export interface PokemonV2Pokemonsprite {
  sprites: Sprites;
}

export interface Sprites {
  front_shiny: string;
  front_default: string;
}
