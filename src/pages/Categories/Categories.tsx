import React from "react";
import "./Categories.css";
import { quizzes } from "../../data";
import { Category } from "../../components";
import { useTitle } from "../../hooks";

function Categories(): JSX.Element {
  useTitle("Categories");
  return (
    <div className="categories">
      <div className="categories-header center-div py-2">
        <h3>Choose quiz to play 🧐</h3>
      </div>
      <div className="categories-quiz center-div py-2">
        {quizzes.map((quiz) => (
          <Category key={quiz._id} quizType={quiz} />
        ))}
      </div>
    </div>
  );
}

export default Categories;
