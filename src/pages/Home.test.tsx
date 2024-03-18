import { render, screen } from "@testing-library/react";
import Home from "./Home";
import { MemoryRouter } from "react-router-dom";

test("타이틀이 있는가?", () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );
  const titleEl = screen.getByRole("heading", { level: 1 });
  expect(titleEl).toBeInTheDocument();
});
