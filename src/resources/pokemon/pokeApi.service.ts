import { HttpRequest } from '../../utils';
import { RawAbility } from './types/ability.types';
import { RawPokemon } from './types/pokemon.types';
import { GetPokemonResponse } from './types/pokemonDto.types';

export class PokemonService {
  constructor(private http: HttpRequest) {}

  async findOne(id: string): Promise<GetPokemonResponse> {
    const result = await this.http.request<RawPokemon>(`pokemon/${id}`);
    const abilities = await this.getAbilities(result.moves);

    return {
      name: result.name,
      image: result.sprites.front_default,
      abilities: abilities.map((ability) => ({
        name: ability.name,
        power: ability.power,
      })),
      types: result.types.map(({ type }) => ({
        name: type.name,
      })),
    };
  }

  private async getAbilities(
    abilities: RawPokemon['moves'],
  ): Promise<RawAbility[]> {
    const promises = abilities.map((ability) => {
      const regex = /move\/(\d+)/;
      const abilityId = ability.move.url.match(regex)?.[1];
      return this.http.request<RawAbility>(`move/${abilityId}`);
    });
    return Promise.all(promises);
  }
}
