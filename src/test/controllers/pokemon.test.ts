import { PokemonService } from '../../resources/pokemon/pokeApi.service';
import { HttpRequest } from '../../utils';
import { PokemonController } from '../../resources/pokemon/pokemon.controller';

jest.mock('../../utils', () => ({
  HttpRequest: jest.fn(),
}));

describe('PokemonController', () => {
  const httpRequest = new HttpRequest('<baseUrl>');
  const service = new PokemonService(httpRequest);
  const controller = new PokemonController(service);

  beforeEach(async () => {
    jest.clearAllMocks();
  });

  it('should return pokemon data', async () => {
    jest.spyOn(service, 'findOne').mockResolvedValueOnce({
      abilities: [
        {
          name: 'razor-leaf',
          power: 80,
        },
      ],
      types: [{ name: 'grass' }],
      name: 'bulbasaur',
      image: 'http://bulbasaur-image.com',
    });

    const result = await controller.getByName('bulbasaur');
    expect(result).toEqual({
      abilities: [
        {
          name: 'razor-leaf',
          power: 80,
        },
      ],
      types: [{ name: 'grass' }],
      name: 'bulbasaur',
      image: 'http://bulbasaur-image.com',
    });
  });
});
