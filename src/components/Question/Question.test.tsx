import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { quizContext } from "../../context";
import Question from "./Question";

const mockDispatch = jest.fn();

export const initialState = {
  currentQuestionIndex: 0,
  selectedQuiz: {
    _id: "1234",
    alt: "onePiece",
    image:
      "https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(17)(76).jpg",
    category: "One Piece",
    title: "How well do you know One piece?",
    quiz: [
      {
        _id: "1",
        question:
          "Who promised that they would never lose another fight until they defeated a certain someone?",
        options: [
          { _id: "12", option: "Zoro", isCorrect: true },
          { _id: "13", option: "Luffy", isCorrect: false },
          { _id: "14", option: "Sanji", isCorrect: false },
          { _id: "15", option: "Usopp", isCorrect: false },
        ],
        selectedOption: "13",
      },
      {
        _id: "2",
        question: "test question 2",
        options: [
          { _id: "12", option: "Zoro", isCorrect: true },
          { _id: "13", option: "Luffy", isCorrect: false },
          { _id: "14", option: "Sanji", isCorrect: false },
          { _id: "15", option: "Usopp", isCorrect: false },
        ],
        selectedOption: "",
      },
    ],
  },
  score: 0,
};

export const MockQuestion = () => {
  return (
    <BrowserRouter>
      <quizContext.Provider
        value={{ quizState: initialState, quizDispatch: mockDispatch }}
      >
        <Question />
      </quizContext.Provider>
    </BrowserRouter>
  );
};

describe("Question", () => {
  it("should find the name of quiz category in heading", () => {
    render(<MockQuestion />);

    const headingElement = screen.getByRole("heading", { name: "One Piece" });

    expect(headingElement).toBeInTheDocument();
  });

  it("should add option-correct class to correct option if the selectedOption is selected", () => {
    render(<MockQuestion />);

    const optionElement = screen.getByText("Zoro");

    expect(optionElement).toHaveClass("option-correct");
  });

  it("should add option-wrong class to wrong option if the selectedOption is selected", () => {
    render(<MockQuestion />);

    const optionElement = screen.getByText("Luffy");

    expect(optionElement).toHaveClass("option-wrong");
  });
});
