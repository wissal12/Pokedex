import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import List from "../../components/List";
import Pokemon from "../../components/Pokemon";
import { Loader, PaginationConatiner } from "./PokemonList.style";
import api from "../../Api";
import { API_ROUTES } from "../../Api/api-routes";
import { ROUTES } from "../../routes";

type PokemonGerneralDetails = {
  name: string;
  images: string[];
};

const PokemonList: React.FC = () => {
  const navigate = useNavigate();
  const params = useParams();
  const pageId = Number(params.pageId);
  const [loading, setLoading] = useState(true);
  const [pokemons, setPokemons] = useState<PokemonGerneralDetails[]>();
  const [maxPageId, setMaxPageId] = useState();

  useEffect(() => {
    api
      .get(`${API_ROUTES.POKEMONS}/${pageId}`)
      .then(({ data: { pokemons, maxPage } }) => {
        setPokemons(pokemons);
        setMaxPageId(maxPage);
        setLoading(false);
      })
      .catch((e) => console.error(e));
  }, [pageId]);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    if (page !== pageId) {
      setLoading(true);
      navigate(`/${ROUTES.POKEMONS}/${page}`);
    }
  };

  if (loading || !pokemons) {
    return <Loader />;
  }

  return (
    <>
      <List>
        {pokemons.map(({ name, images }) => (
          <Pokemon name={name} images={images} />
        ))}
      </List>
      <PaginationConatiner>
        <Pagination
          page={pageId}
          count={maxPageId}
          onChange={handlePageChange}
        />
      </PaginationConatiner>
    </>
  );
};

export default PokemonList;
