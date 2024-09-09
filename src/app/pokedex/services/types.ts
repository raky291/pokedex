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
  front_default: string | null;
  front_shiny: string | null;
  front_female: string | null;
  front_shiny_female: string | null;
  back_default: string | null;
  back_shiny: string | null;
  back_female: string | null;
  back_shiny_female: string | null;
  other: OtherPokemonSprites;
}

export interface OtherPokemonSprites {
  "official-artwork": OfficialArtwork;
}

export interface OfficialArtwork {
  front_default: string | null;
  front_shiny: string | null;
}
