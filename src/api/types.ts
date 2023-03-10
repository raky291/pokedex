// https://github.com/Gabb-c/pokenode-ts/tree/master/src/models

export interface INamedAPIResourceList {
  count: number;
  next: string | null;
  previous: string | null;
  results: INamedAPIResource[];
}

export interface INamedAPIResource {
  name: string;
  url: string;
}

export interface IPokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  // abilities: PokemonAbility[];
  // forms: NamedAPIResource[];
  // game_indices: VersionGameIndex[];
  // held_items: PokemonHeldItem[];
  // location_area_encounters: string;
  // moves: PokemonMove[];
  // sprites: PokemonSprites;
  // species: NamedAPIResource;
  // stats: PokemonStat[];
  types: PokemonType[];
  // past_types: PokemonPastType[];
}

export interface PokemonType {
  slot: number;
  type: INamedAPIResource;
}
