import type { Request, Response } from 'express';
import { PokemonService } from './pokeApi.service';

export class PokemonController {
  constructor(private pokemonService: PokemonService) {}
  getByName = async (req: Request, res: Response) => {
    const result = await this.pokemonService.findOne(req.params.name);
    return res.json(result);
  };
}
