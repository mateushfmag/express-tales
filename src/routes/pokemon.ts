import { Pokemon } from '../resources/pokemon';
import type { Express } from 'express';

export class PokemonRoutes {
  constructor(private app: Express) {
    this.app.get('/pokemon/:name', Pokemon.controller.getByName);
  }
}
