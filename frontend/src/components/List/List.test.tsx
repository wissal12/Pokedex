import { render, screen } from "@testing-library/react";
import List from ".";

describe("[Component] <List />", () => {
  it("should render", () => {
    const wrapper = render(
      <List>
        <div>first child</div>
        <div>second child</div>
        <div>third child</div>
      </List>
    );
    expect(wrapper).toBeTruthy();
  });

  it("should render all children", () => {
    const wrapper = render(
      <List>
        <div>first child</div>
        <div>second child</div>
        <div>third child</div>
      </List>
    );

    const children = screen.getAllByText(/child/);
    expect(children).toHaveLength(3);
  });
});
