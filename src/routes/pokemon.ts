import { Pokemon } from '../resources/pokemon';
import type { Express } from 'express';

export class PokemonRoutes {
  constructor(private app: Express) {
    this.app.get('/pokemon/:name', async (req, res) => {
      const result = await Pokemon.controller.getByName(req.params.name);
      return res.json(result);
    });
  }
}
