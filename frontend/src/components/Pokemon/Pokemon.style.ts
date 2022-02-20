import { Grid } from "@mui/material";
import styled from "styled-components";
import { COLORS } from "../../stylesheet";

const POKEMON_CONTAINER_DIMENSIONS = {
  height: "90px",
  width: "180px",
};

export const PokemonTitle = styled(Grid)`
  padding-left: 10px;
  padding-top: 10px;
  text-transform: capitalize;
`;

export const PokemonContainer = styled(Grid)`
  height: ${POKEMON_CONTAINER_DIMENSIONS.height};
  background-color: ${COLORS.secondaryCardBackground};

  && {
    width: ${POKEMON_CONTAINER_DIMENSIONS.width};
  }
`;
