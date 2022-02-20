export const config = {
  dev: process.env.DEV || true,
  port: process.env.PORT || 8080,
  frontendUrl: process.env.FRONTEND_URL || 'http://localhost:3000',
  pokemonApiUrl:
    process.env.POKEAPI_URL || 'https://pokeapi.co/api/v2/pokemon/',
  nbPokemonsPerPage: Number(process.env.POKEMON_PAGINATION) || 9,
};
