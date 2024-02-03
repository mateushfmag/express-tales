export interface GetPokemonResponse {
  abilities: {
    name: string;
    power: number;
  }[];
  name: string;
  image: string;
  types: {
    name: string;
  }[];
}
