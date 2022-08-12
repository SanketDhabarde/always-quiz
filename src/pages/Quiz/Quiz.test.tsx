import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import Quiz from "./Quiz";

describe("Quiz", () => {
  it("should render Rules first before starting quiz", () => {
    render(<Quiz />, { wrapper: BrowserRouter });

    const headingElement = screen.getByRole("heading", {
      name: "Read some rules before the quiz begin.🤓",
    });

    expect(headingElement).toBeInTheDocument();
  });

  it("should render Question when click on button", async () => {
    render(<Quiz />, { wrapper: BrowserRouter });

    const buttonElement = screen.getByRole("button", {
      name: "Good luck 🤗 Lets begin",
    });

    await userEvent.click(buttonElement);

    expect(buttonElement).not.toBeInTheDocument();
  });
});
