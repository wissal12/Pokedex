import { Controller, Get, Param, Res } from '@nestjs/common';
import { PokemonDetails, PokemonService } from './app.service';
import { AxiosResponse } from 'axios';

@Controller('pokemons')
export class AppController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Get(':pageId')
  getHello(@Param() params, @Res() res): void {
    this.pokemonService
      .getPokemonsWithDetailsForPage(params.pageId)
      .then((pokemonsDetails) =>
        Promise.all(pokemonsDetails.pokemonPromises).then(
          (values: AxiosResponse<PokemonDetails>[]) => {
            res.send(this.formatPokemons(values, pokemonsDetails.pokemonCount));
          },
        ),
      );
  }

  formatPokemons(
    pokemons: AxiosResponse<PokemonDetails>[],
    pokemonCount: number,
  ) {
    return {
      maxPage: Math.ceil(pokemonCount / this.pokemonService.NB_PAGINATION),
      pokemons: pokemons.map(({ data: { name, sprites } }) => ({
        name,
        images: [sprites.front_default],
      })),
    };
  }
}
