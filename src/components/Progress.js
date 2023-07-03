import React from "react";

export default function Progress({
  index,
  NumberOfQuestion,
  points,
  maxPossiblePoints,
  answer,
}) {
  return (
    <header className="progress">
      <progress
        max={NumberOfQuestion}
        value={index + Number(answer !== null)}
      />
      <p>
        Question <strong>{index}</strong> / {NumberOfQuestion}
      </p>
      <p>
        <p>
          <strong>{points}</strong>/ {maxPossiblePoints}
        </p>
      </p>
    </header>
  );
}
