import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Categories from "./Categories";

describe("Categories", () => {
  it("should contain lists of quiz categories", () => {
    render(<Categories />, { wrapper: BrowserRouter });

    const imgElements = screen.getAllByRole("img");

    expect(imgElements.length).toBe(3);
  });
});
