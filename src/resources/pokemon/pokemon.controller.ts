import { PokemonService } from './pokeApi.service';

export class PokemonController {
  constructor(private pokemonService: PokemonService) {}
  getByName = async (name: string) => {
    return this.pokemonService.findOne(name);
  };
}
