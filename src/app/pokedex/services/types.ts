export interface NamedAPIResource {
  name: string;
  url: string;
}

export interface NamedAPIResourceList {
  count: number;
  next: string | null;
  previous: string | null;
  results: NamedAPIResource[];
}

export interface Pokemon {
  id: number;
  name: string;
  sprites: PokemonSprites;
  types: PokemonType[];
}

export interface PokemonType {
  slot: number;
  type: NamedAPIResource;
}

export interface PokemonSprites {
  other: OtherPokemonSprites;
}

export interface OtherPokemonSprites {
  "official-artwork": OfficialArtwork;
}

export interface OfficialArtwork {
  front_default: string | null;
  front_shiny: string | null;
}
