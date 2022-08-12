import React from "react";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../context/quiz-context";
import { useTitle } from "../../hooks";
import "./Result.css";

function Result(): JSX.Element {
  useTitle("Result");
  const { quizState } = useQuiz();
  const { selectedQuiz, score } = quizState;
  const { quiz } = selectedQuiz;
  const navigate = useNavigate();

  return (
    <div className="results">
      <div className="result-navigation py-2">
        <div onClick={() => navigate("/")}>
          <i className="fas fa-angle-left px-1"></i>
          Home
        </div>
        <div onClick={() => navigate("/categories")}>
          Category
          <i className="fas fa-angle-right px-1"></i>
        </div>
      </div>
      <div className="result-category py-1">
        <h3>Result time🎉</h3>
      </div>
      <div className="result-score py-2">
        Final score: {score} / {quiz.length * 2}
      </div>
      <div className="quiz">
        {quiz.map(({ _id, question, options, selectedOption }) => (
          <div
            className="card question-card question"
            key={_id}
            data-testid="question-element"
          >
            <div className="question-single-que py-1 text-center">
              <p>{question}</p>
            </div>
            <div className="question-points">
              {!selectedOption && <p className="input-err">Not Attempted</p>}
            </div>
            <div className="question-options py-1">
              {options.map(({ _id, option, isCorrect }) => (
                <div
                  className={`option p-2 my-2 text-center border-m ${
                    (selectedOption && isCorrect) || isCorrect
                      ? "option-correct"
                      : ""
                  }
            ${_id === selectedOption && !isCorrect ? "option-wrong" : ""}
            `}
                  key={_id}
                >
                  {option}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Result;
