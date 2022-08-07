import React from "react";
import { Question, Rules } from "../../components";
import { useTitle, useToggle } from "../../hooks";
import "./Quiz.css";

function Quiz(): JSX.Element {
  const [isRulesVisible, toggleRules] = useToggle();
  useTitle("Questions");

  return (
    <div className="quiz center-div">
      {isRulesVisible ? <Question /> : <Rules toggleHandler={toggleRules} />}
    </div>
  );
}

export default Quiz;
