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
  sprites: PokemonSprites;
  // species: NamedAPIResource;
  // stats: PokemonStat[];
  types: PokemonType[];
  // past_types: PokemonPastType[];
}

export interface PokemonSprites {
  /** The default depiction of this Pokémon from the front in battle */
  front_default: string | null;
  /** The shiny depiction of this Pokémon from the front in battle */
  front_shiny: string | null;
  /** The female depiction of this Pokémon from the front in battle */
  front_female: string | null;
  /** The shiny female depiction of this Pokémon from the front in battle */
  front_shiny_female: string | null;
  /** The default depiction of this Pokémon from the back in battle */
  back_default: string | null;
  /** The shiny depiction of this Pokémon from the back in battle */
  back_shiny: string | null;
  /** The female depiction of this Pokémon from the back in battle */
  back_female: string | null;
  /** The shiny female depiction of this Pokémon from the back in battle */
  back_shiny_female: string | null;
  /** Dream World, Official Artwork and Home sprites */
  other?: OtherPokemonSprites;
  /** Version Sprites of this Pokémon */
  // versions: VersionSprites;
}

export interface OtherPokemonSprites {
  /** Dream World Sprites of this Pokémon */
  dream_world: DreamWorld;
  /** Official Artwork Sprites of this Pokémon */
  "official-artwork": OfficialArtwork;
  /** Home Artwork Sprites of this Pokémon */
  home: Home;
}

export interface DreamWorld {
  /** The default depiction of this Pokémon from the front in battle */
  front_default: string | null;
  /** The female depiction of this Pokémon from the front in battle */
  front_female: string | null;
}

/** Official Artwork sprites */
interface OfficialArtwork {
  /** The default depiction of this Pokémon from the front in battle */
  front_default: string | null;
}

/** Home sprites */
export interface Home {
  /** The default depiction of this Pokémon from the front in battle */
  front_default: string | null;
  /** The female depiction of this Pokémon from the front in battle */
  front_female: string | null;
  /** The shiny depiction of this Pokémon from the front in battle */
  front_shiny: string | null;
  /** The shiny female depiction of this Pokémon from the back in battle */
  front_shiny_female: string | null;
}

// export interface VersionSprites {
//   /** Generation-I Sprites of this Pokémon */
//   'generation-i': GenerationISprites;
//   /** Generation-II Sprites of this Pokémon */
//   'generation-ii': GenerationIISprites;
//   /** Generation-III Sprites of this Pokémon */
//   'generation-iii': GenerationIIISprites;
//   /** Generation-IV Sprites of this Pokémon */
//   'generation-iv': GenerationIVSprites;
//   /** Generation-V Sprites of this Pokémon */
//   'generation-v': GenerationVSprites;
//   /** Generation-VI Sprites of this Pokémon */
//   'generation-vi': GenerationVISprites;
//   /** Generation-VII Sprites of this Pokémon */
//   'generation-vii': GenerationVIISprites;
//   /** Generation-VIII Sprites of this Pokémon */
//   'generation-viii': GenerationVIIISprites;
// }

export interface PokemonType {
  slot: number;
  type: INamedAPIResource;
}
