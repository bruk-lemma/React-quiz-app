import React from "react";

export default function NextButton({
  dispatch,
  answer,
  index,
  NumberOfQuestions,
}) {
  if (answer === null) return null;
  if (index < NumberOfQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );
  if (index === NumberOfQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );
}
