import { render, screen } from "@testing-library/react";
import Pokemon from "./Pokemon.component";

describe("[Component] <Pokemon />", () => {
  it("should render", () => {
    const props = {
      name: "pikachu",
      images: ["img.png"],
    };

    const wrapper = render(<Pokemon {...props} />);
    expect(wrapper).toBeTruthy();
  });

  it("should render and img and a text", () => {
    const props = {
      name: "Pikachu",
      images: ["img.png"],
    };

    const wrapper = render(<Pokemon {...props} />);

    // single image
    const pokemonImg = screen.getAllByRole("img");
    expect(pokemonImg).toHaveLength(1);

    // text with first letter capitalized
    const pokemonTitle = screen.getAllByText(
      props.name.charAt(0).toUpperCase() + props.name.slice(1)
    );
    expect(pokemonTitle).toHaveLength(1);
  });
});
