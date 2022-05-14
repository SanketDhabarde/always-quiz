import React from "react";
import { Question, Rules } from "../../components";
import { useTitle, useToggle } from "../../hooks";
import "./Quiz.css";

function Quiz() {
  const [isRulesVisible, toggleRules] = useToggle();
  useTitle("Questions");
  return (
    <div className="quiz center-div">
      {isRulesVisible ? (
        <Question />
      ) : (
        <Rules toggleRules={toggleRules} />
      )}
    </div>
  );
}

export default Quiz;
