# Pokédox ![PokemonBall](https://i.postimg.cc/Y950kZGr/Hnet-com-image.png)
Pokemon-paginated-display app that consumes the [pokeapi](https://pokeapi.co/), backend implemented with [Nestjs](https://nestjs.com/) frontend is using [React](https://reactjs.org/).

# Usage

## Configure api or use default config
Modify `api/src/config.ts` or define environment variables.
Or leave default values.


```
    configs:
        - DEV: set to true for development env
        - PORT
        - FRONTEND_URL
        - POKEAPI_URL
        - POKEMON_PAGINATION: number of pokemons to fetch & return per page
```

## Configure frontend or use default config
Modify `frontend/src/config.ts` or define environment variables.
Or leave default values.

```
    configs:
        - API_URL
```

## install
```bash
cd frontend && npm install
cd api && npm install
```

## run tests
```bash
cd frontend && npm test ( requires NODE_VERSION >= 16 )
```

## run
```bash
cd frontend && npm start
cd api && npm start
```

Navigate to `http://localhost:3000/`

# Who you gonna call  ![Ghostbusters](https://i.ibb.co/J3WD1ct/Webp-net-resizeimage.png)

Wissal Najjar: [wissal.najjar@ensi-uma.tn](mailto:wissal.najjar@ensi-uma.tn)


