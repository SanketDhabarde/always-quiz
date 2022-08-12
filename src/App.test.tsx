import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import App from "./App";

describe("App", () => {
  it("should render full app and navigation", async () => {
    render(<App />, { wrapper: BrowserRouter });

    const headingElement = screen.getByRole("heading", { name: "Quiz App" });

    expect(headingElement).toBeInTheDocument();

    await userEvent.click(screen.getByText("Play Now"));

    expect(screen.getByText("Choose quiz to play 🧐")).toBeInTheDocument();
  });

  it("should land on 404 page when hit bad-route", () => {
    const someBadRoute = "/some/bad/route";

    render(
      <MemoryRouter initialEntries={[someBadRoute]}>
        <App />
      </MemoryRouter>
    );

    const headingElement = screen.getByRole("heading", {
      name: "Hit the wrong route😔",
    });

    expect(headingElement).toBeInTheDocument();
  });
});
