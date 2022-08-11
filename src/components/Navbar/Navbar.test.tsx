import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";

const MockNavbar = () => {
  return (
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
};

describe("Navbar", () => {
  it("should find the link element of brand", () => {
    render(<MockNavbar />);

    const linkElement = screen.getByRole("link", { name: "Always Quiz" });

    expect(linkElement).toBeInTheDocument();
  });
});
