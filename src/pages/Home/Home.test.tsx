import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import Categories from "../Categories/Categories";
import Home from "./Home";

describe("Home", () => {
  it("should find the heading", () => {
    render(<Home />, { wrapper: BrowserRouter });

    const headingElement = screen.getByRole("heading", { name: "Quiz App" });

    expect(headingElement).toBeInTheDocument();
  });

  it("should go to category page when click on 'Play Now' link", async () => {
    render(<Home />, { wrapper: BrowserRouter });

    const linkElement = screen.getByRole("link", { name: "Play Now" });

    await userEvent.click(linkElement);

    render(<Categories />, { wrapper: BrowserRouter });

    expect(screen.getByText(/Choose quiz to play 🧐/i)).toBeInTheDocument();
  });
});
