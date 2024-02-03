import { PokemonRoutes } from './pokemon';
import type { Express } from 'express';

export class Routes {
  constructor(private app: Express) {}
  register() {
    new PokemonRoutes(this.app);
  }
}
