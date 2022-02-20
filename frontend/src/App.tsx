import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PokemonList from "./pages/PokemonList";
import { BASE_POKEMONS_PAGE, ROUTES } from "./routes";

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate replace to={BASE_POKEMONS_PAGE} />} />
      <Route
        path={`${ROUTES.POKEMONS}`}
        element={<Navigate replace to={BASE_POKEMONS_PAGE} />}
      />
      <Route path={`${ROUTES.POKEMONS}/:pageId`} element={<PokemonList />} />
    </Routes>
  </BrowserRouter>
);

export default App;
