import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Rules from "./Rules";

const mockToggleHandler = jest.fn();

describe("Rules", () => {
  it("should find the button to start the quiz", () => {
    render(<Rules toggleHandler={mockToggleHandler} />);

    const buttonElement = screen.getByRole("button", {
      name: "Good luck 🤗 Lets begin",
    });

    expect(buttonElement).toBeInTheDocument();
  });

  it("should find the heading of component", () => {
    render(<Rules toggleHandler={mockToggleHandler} />);

    const headingElement = screen.getByRole("heading", {
      name: "Read some rules before the quiz begin.🤓",
    });

    expect(headingElement).toBeInTheDocument();
  });

  it("should toggle the state", async () => {
    render(<Rules toggleHandler={mockToggleHandler} />);

    const buttonElement = screen.getByRole("button", {
      name: "Good luck 🤗 Lets begin",
    });

    await userEvent.click(buttonElement);

    expect(mockToggleHandler).toBeCalled();
  });
});
