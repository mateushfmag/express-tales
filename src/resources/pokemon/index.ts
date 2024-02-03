import { PokemonController } from './pokemon.controller';
import { PokemonService } from './pokeApi.service';
import { HttpRequest } from '../../utils';

export class Pokemon {
  private static httpRequest = new HttpRequest('https://pokeapi.co/api/v2');
  public static service = new PokemonService(this.httpRequest);
  public static controller = new PokemonController(this.service);
}
