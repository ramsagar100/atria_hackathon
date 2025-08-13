import React, { useState } from "react";

export default function PlacementPractice() {
  const [questions, setQuestions] = useState([]);
  const [showAnswers, setShowAnswers] = useState({});

  // Function to generate a random integer
  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  // Function to generate easy questions
  const generateEasyQuestion = () => {
    const types = [
      () => {
        let percent = rand(10, 50);
        let num = rand(100, 500);
        let ans = (percent / 100) * num;
        return { q: `What is ${percent}% of ${num}?`, a: ans };
      },
      () => {
        let price = rand(5, 50);
        let qty = rand(2, 10);
        let ans = price * qty;
        return { q: `If the price of a pen is ₹${price}, what is the cost of ${qty} pens?`, a: ans };
      },
      () => {
        let speed = rand(20, 60);
        let time = rand(1, 5);
        let ans = speed * time;
        return { q: `A train travels at ${speed} km/h for ${time} hours. How far does it travel?`, a: `${ans} km` };
      },
      () => {
        let a = rand(2, 10), b = rand(10, 50), c = rand(20, 60);
        let ans = ((a + b + c) / 3).toFixed(2);
        return { q: `Find the average of ${a}, ${b}, and ${c}.`, a: ans };
      }
    ];
    return types[rand(0, types.length - 1)]();
  };

  // Function to show questions
  const showPlacementQuestions = () => {
    let generated = [];
    for (let i = 0; i < 5; i++) {
      generated.push(generateEasyQuestion());
    }
    setQuestions(generated);
    setShowAnswers({});
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Placement Preparation Practice</h2>
      <button
        onClick={showPlacementQuestions}
        style={{
          padding: "10px",
          background: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginBottom: "20px"
        }}
      >
        Generate Questions
      </button>

      {questions.length > 0 &&
        questions.map((item, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              borderRadius: "5px",
              padding: "10px",
              marginBottom: "10px"
            }}
          >
            <p><b>Q{index + 1}:</b> {item.q}</p>
            <button
              onClick={() =>
                setShowAnswers((prev) => ({
                  ...prev,
                  [index]: !prev[index]
                }))
              }
              style={{
                padding: "5px 10px",
                background: "#2196F3",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer"
              }}
            >
              {showAnswers[index] ? "Hide Answer" : "Show Answer"}
            </button>
            {showAnswers[index] && <p><b>Answer:</b> {item.a}</p>}
          </div>
        ))}
    </div>
  );
}
