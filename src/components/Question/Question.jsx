import React from "react";
import { useQuiz } from "../../context/quiz-context";
import "./Question.css";

function Question() {
  const { quizState, quizDispatch } = useQuiz();
  const { currentQuestionIndex, selectedQuiz, score } = quizState;
  const { category, quiz } = selectedQuiz;
  const { question, options, selectedOption } = quiz[currentQuestionIndex];

  const changeQuestionHandler = () => {
    if (currentQuestionIndex + 1 === quiz.length) {
      alert("result page");
    } else {
      quizDispatch({
        type: "SET_CURRENT_QUESTION_INDEX",
        payload: currentQuestionIndex + 1,
      });
    }
  };

  const answerSelectHandler = (_id, isCorrect) => {
    if (!selectedOption) {
      quizDispatch({
        type: "SET_SELECTED_OPTION",
        payload: {
          quizId: quiz[currentQuestionIndex]._id,
          selectedOption: _id,
          score: isCorrect ? 2 : 0,
        },
      });
    }
  };

  return (
    <div className="card question-card question">
      <div className="question-category py-2">
        <h3>{category}</h3>
      </div>
      <div className="question-score py-2">
        <div className="question-number">
          Question: {currentQuestionIndex + 1} / {quiz.length}
        </div>
        <div className="score">Score: {score}</div>
      </div>
      <div className="question-single-que py-1 text-center">
        <p>{question}</p>
      </div>
      <div className="question-options py-1">
        {options.map(({ _id, option, isCorrect }) => (
          <div
            className={`option p-2 my-2 text-center border-m ${
              selectedOption && isCorrect ? "option-true" : ""
            }
            ${_id === selectedOption && !isCorrect ? "option-false" : ""}
            `}
            key={_id}
            onClick={() => answerSelectHandler(_id, isCorrect)}
          >
            {option}
          </div>
        ))}
      </div>
      <div className="question-navigation py-2" onClick={changeQuestionHandler}>
        {currentQuestionIndex + 1 === quiz.length ? `Result` : `Next question`}
        <i className="fas fa-angle-right"></i>
      </div>
    </div>
  );
}

export default Question;
