import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer", () => {
  it("should find all the social links in footer", () => {
    render(<Footer />);

    const linkElements = screen.getAllByRole("link");

    expect(linkElements.length).toBe(4);
  });
});
