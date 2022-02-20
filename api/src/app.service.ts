import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { config } from './config';

type PokemonPayload = {
  name: string;
  url: string;
};
type PokemonsResponse = { count: number; results: PokemonPayload[] };
export type PokemonDetails = {
  name: string;
  sprites: any;
};
type PokemonDetailsResponse = {
  pokemonPromises: Promise<{ data: PokemonDetails }>[];
  pokemonCount: number;
};

@Injectable()
export class PokemonService {
  constructor(private httpService: HttpService) {}

  NB_PAGINATION = config.nbPokemonsPerPage;

  async getPokemonsForPage(
    pageId: string,
  ): Promise<AxiosResponse<PokemonsResponse>> {
    const offset = (parseInt(pageId) - 1) * this.NB_PAGINATION;
    return this.httpService
      .get<PokemonsResponse>(config.pokemonApiUrl, {
        params: {
          limit: this.NB_PAGINATION,
          offset,
        },
      })
      .toPromise();
  }

  async getPokemonsWithDetailsForPage(
    pageId: string,
  ): Promise<PokemonDetailsResponse> {
    const pokemons = this.getPokemonsForPage(pageId);
    return pokemons.then((response) => ({
      pokemonPromises: response.data.results.map(async (fetchPokemonUrl) =>
        this.httpService.get(fetchPokemonUrl.url).toPromise(),
      ),
      pokemonCount: response.data.count,
    }));
  }
}
