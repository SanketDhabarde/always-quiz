import React from "react";
import { Link } from "react-router-dom";
import { useQuiz } from "../../context/quiz-context";
import "./Category.css";
import { CategoryProp } from "./Category.types";

function Category({ quizType }: CategoryProp): JSX.Element {
  const { _id, image, alt, category, quiz, title } = quizType;
  const { quizDispatch } = useQuiz();
  
  const selectQuizHandler = () => {
    quizDispatch({ type: "SET_SELECTED_QUIZ", payload: quizType });
  };

  return (
    <Link to={`/quiz/${_id}`} className="btn-link" onClick={selectQuizHandler}>
      <div className="card category-card card-shadow m-1">
        <div className="card-section">
          <img
            className="card-img img-responsive category-img"
            src={image}
            alt={alt}
          />
          <div className="card-header p-1">
            <h3>{category}</h3>
            <p className="author-name">{title}</p>
          </div>
        </div>
        <div className="card-footer quiz-card-footer p-2">
          <p>{quiz.length} Questions</p>
        </div>
      </div>
    </Link>
  );
}

export default Category;
