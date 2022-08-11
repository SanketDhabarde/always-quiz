import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { quizContext } from "../../context";
import Result from "./Result";

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
          { _id: "12", option: "option 1", isCorrect: true },
          { _id: "13", option: "option 2", isCorrect: false },
          { _id: "14", option: "option 3", isCorrect: false },
          { _id: "15", option: "option 4", isCorrect: false },
        ],
        selectedOption: "",
      },
    ],
  },
  score: 0,
};

const MockResult = () => {
  return (
    <BrowserRouter>
      <quizContext.Provider
        value={{ quizState: initialState, quizDispatch: mockDispatch }}
      >
        <Result />
      </quizContext.Provider>
    </BrowserRouter>
  );
};

describe("Result", () => {
  it("should find the heading of result page", () => {
    render(<MockResult />);

    const headingElement = screen.getByRole("heading", {
      name: "Result time🎉",
    });

    expect(headingElement).toBeInTheDocument();
  });

  it("should have all the list of questions", () => {
    render(<MockResult />);

    const questionElements = screen.getAllByTestId("question-element");

    expect(questionElements.length).toBe(2);
  });
});
