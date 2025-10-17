import React, { useEffect, useState } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime <= 1) {
          onAnswered(false);
          return 10;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeRemaining, onAnswered]);

  function handleAnswer(isCorrect) {
    onAnswered(isCorrect);
    setTimeRemaining(10); // reset for next question
  }

  const { prompt, answers, correctIndex } = question;

  return (
    <div>
      <h2>{prompt}</h2>
      {answers.map((answer, index) => (
        <button
          key={index}
          onClick={() => handleAnswer(index === correctIndex)}
        >
          {answer}
        </button>
      ))}
      {/* ✅ THIS LINE NEEDS TO MATCH YOUR TEST EXACTLY */}
      <p>{timeRemaining} seconds remaining</p>
    </div>
  );
}

export default Question;
