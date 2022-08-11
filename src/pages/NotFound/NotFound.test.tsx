import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NotFound from "./NotFound";

const MockNotFound = () => {
  return (
    <BrowserRouter>
      <NotFound />
    </BrowserRouter>
  );
};

describe("NotFound", () => {
  it("should find not found image", () => {
    render(<MockNotFound />);

    const imgElement = screen.getByRole("img");

    expect(imgElement).toBeInTheDocument();
  });

  it("should find the link to go back to home page", () => {
    render(<MockNotFound />);

    const linkElement = screen.getByRole("link", {
      name: "Go back to home page",
    });

    expect(linkElement).toBeInTheDocument();
  });

  it("should find the heading", () => {
    render(<MockNotFound />);

    const headingElement = screen.getByRole("heading", {
      name: "Hit the wrong route😔",
    });

    expect(headingElement).toBeInTheDocument();
  });
});
