import { Grid } from "@mui/material";
import React from "react";
import { PokemonContainer, PokemonTitle } from "./Pokemon.style";

type Props = {
  name: string;
  images: string[];
};

const Pokemon: React.FC<Props> = ({ name, images }) => {
  return (
    <PokemonContainer container direction="column">
      <PokemonTitle>{name}</PokemonTitle>
      <Grid item>
        {
          // TODO display images in carousel/slider
        }
        <img src={images[0]} alt={`pokemon-${name}`} />
      </Grid>
    </PokemonContainer>
  );
};

export default Pokemon;
