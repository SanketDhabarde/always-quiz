import React from "react";
import "./Rules.css";

function Rules({ toggleHandler }: any): JSX.Element {
  return (
    <div className="rules">
      <h3 className="py-3">Read some rules before the quiz begin.🤓</h3>
      <div className="card rules-card p-2">
        <p className="rule py-1 text-m">
          <span className="rule-no">1. </span>You will have 3 questions
        </p>
        <p className="rule py-1 text-m">
          <span className="rule-no">2. </span>Each question will have one
          correct option.
        </p>
        <p className="rule py-1 text-m">
          <span className="rule-no">3. </span>Each correct option will give you
          2 marks and each wrong option 0.
        </p>
        <div className="center-div">
          <button
            className="btn btn-primary text-center"
            onClick={toggleHandler}
          >
            Good luck 🤗 Lets begin
          </button>
        </div>
      </div>
    </div>
  );
}

export default Rules;
