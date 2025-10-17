// src/App.js
import React, { useState } from "react";
import Question from "./components/Question";

const quizData = [
  {
    id: 1,
    prompt: "What is 2 + 2?",
    answers: ["1", "2", "3", "4"],
    correctIndex: 3,
  },
  {
    id: 2,
    prompt: "What is the capital of France?",
    answers: ["Berlin", "London", "Paris", "Madrid"],
    correctIndex: 2,
  },
  // Add more questions as needed
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);

  function handleAnswered(isCorrect) {
    if (isCorrect) {
      setScore((s) => s + 1);
    }
    // move to next question or loop
    const next = currentIndex + 1;
    if (next < quizData.length) {
      setCurrentIndex(next);
    } else {
      // Optionally: show results or reset
      setCurrentIndex(0);
    }
  }

  return (
    <div className="App">
      <h1>Trivia Quiz</h1>
      <p>Score: {score}</p>
      <Question question={quizData[currentIndex]} onAnswered={handleAnswered} />
    </div>
  );
}

export default App;
