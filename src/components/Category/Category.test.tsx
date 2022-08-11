import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Category from "./Category";
import { CategoryProp } from "./Category.types";

const mockQuizType = {
  _id: "1234",
  image: "",
  alt: "",
  category: "test_category",
  quiz: [],
  title: "",
};

const MockCategory = ({ quizType }: CategoryProp) => {
  return (
    <BrowserRouter>
      <Category quizType={quizType} />
    </BrowserRouter>
  );
};

describe("Category", () => {
  it("should find image in component", () => {
    render(<MockCategory quizType={mockQuizType} />);

    const imgElement = screen.getByRole("img");

    expect(imgElement).toBeInTheDocument();
  });

  it("should show same category name as passed in props", () => {
    render(<MockCategory quizType={mockQuizType} />);

    const headingElement = screen.getByRole("heading");

    expect(headingElement.textContent).toBe("test_category");
  });
});
