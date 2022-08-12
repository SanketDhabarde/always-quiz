import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import Category from "./Category";
import { quizContext } from "../../context";
import { CategoryProp } from "./Category.types";
import { initialState } from "../../reducer";

const mockQuizType = {
  _id: "1234",
  image: "",
  alt: "",
  category: "test_category",
  quiz: [],
  title: "",
};

const mockDispatch = jest.fn();

const MockCategory = ({ quizType }: CategoryProp) => {
  return (
    <BrowserRouter>
      <quizContext.Provider
        value={{ quizState: initialState, quizDispatch: mockDispatch }}
      >
        <Category quizType={quizType} />
      </quizContext.Provider>
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

  it("should go to question page when click on quiz", async () => {
    render(<MockCategory quizType={mockQuizType} />);

    const imgElement = screen.getByRole("img");

    await userEvent.click(imgElement);

    expect(window.location.pathname).toBe("/quiz/1234");
  });
});
