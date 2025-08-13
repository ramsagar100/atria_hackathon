import React, { useState, useRef } from "react";
import "./Videos.css";
import { Link } from "react-router-dom";
import ChatbotButton from "./ChatbotButton";
import ChatlingBot from "./ChatlingBot";
import PlacementPractice from "./PlacementPractice";
export default function Videos({ course }) {
  const [videoName, setVideoName] = useState("js2.mp4");
  const [showCompiler, setShowCompiler] = useState(false);
  const [liked, setLiked] = useState(false);
  const [comments, setComments] = useState([
    { name: "Alice", text: "Love these JavaScript lessons!" },
    { name: "John", text: "The explanations are super clear." },
  ]);
  const [commentName, setCommentName] = useState("");
  const [commentText, setCommentText] = useState("");
  const [notes, setNotes] = useState("");
  const videoRef = useRef(null);

  // Placement Preparation states
  const [placementQuestions, setPlacementQuestions] = useState([]);
  const [loadingQuestions, setLoadingQuestions] = useState(false);
  const [showAnswers, setShowAnswers] = useState({});

  const lessons = [
    "js4.mp4",
    "js5.mp4",
    "js6.mp4",
    "js2.mp4",
    "js3.mp4",
    "5.mp4",
  ];

  const changeVideo = (newVideo) => {
    setVideoName(newVideo);
    if (videoRef.current) {
      videoRef.current.src = `/${newVideo}`;
      videoRef.current.load();
    }
  };

  const handleLike = () => setLiked(true);

  const addComment = () => {
    if (commentName && commentText) {
      setComments([{ name: commentName, text: commentText }, ...comments]);
      setCommentName("");
      setCommentText("");
    }
  };

  // Placement questions with answers
  const showPlacementQuestions = () => {
    setLoadingQuestions(true);
    setPlacementQuestions([]);
    setShowAnswers({}); // reset previous answers

    setTimeout(() => {
      const questionsWithAnswers = [
        {
          q: "Explain the difference between var, let, and const in JavaScript.",
          a: "var is function-scoped, let and const are block-scoped. var can be redeclared, let cannot, const cannot be reassigned.",
        },
        {
          q: "What is a closure in JavaScript? Give an example.",
          a: "A closure is a function that retains access to variables from its parent scope even after the parent function has closed.",
        },
        {
          q: "Explain time complexity and space complexity.",
          a: "Time complexity is how fast an algorithm runs, space complexity is how much memory it uses.",
        },
        {
          q: "What is normalization in databases?",
          a: "Normalization is the process of organizing data to reduce redundancy and improve integrity.",
        },
        {
          q: "Write a program to reverse a linked list.",
          a: "Iteratively or recursively change the next pointer of each node to point to its previous node.",
        },
        {
          q: "Explain REST API with an example.",
          a: "REST is an architectural style for APIs using HTTP. Example: GET /users returns a list of users.",
        },
        {
          q: "What is the difference between TCP and UDP?",
          a: "TCP is connection-oriented and reliable, UDP is connectionless and faster but less reliable.",
        },
        {
          q: "Describe your final year project in detail.",
          a: "Explain the problem, your solution, technologies used, and challenges faced.",
        },
        {
          q: "What are the four pillars of OOP?",
          a: "Encapsulation, Abstraction, Inheritance, and Polymorphism.",
        },
        {
          q: "Write SQL query to find the 2nd highest salary in a table.",
          a: "SELECT MAX(salary) FROM employees WHERE salary < (SELECT MAX(salary) FROM employees);",
        },
      ];
      setPlacementQuestions(questionsWithAnswers);
      setLoadingQuestions(false);
    }, 2000);
  };

  const toggleAnswer = (index) => {
    setShowAnswers((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <>
      <h2 className="page-title">JavaScript Course</h2>

      <div className="container">
        {/* Video Player */}
        <div className="video-container">
          <video ref={videoRef} className="video-player" controls>
            <source src={`/${videoName}`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <button
            className={`like-button ${liked ? "liked" : ""}`}
            onClick={handleLike}
            disabled={liked}
          >
            {liked ? "👍 Liked" : "👍 Like"}
          </button>
        </div>

        {/* Lessons Grid */}
        <div className="video-buttons-grid">
          {lessons.map((file, index) => (
            <div
              className="lesson-card"
              key={index}
              onClick={() => changeVideo(file)}
            >
              <h4 className="lesson-title">Lesson {index + 1}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div style={{ display: "flex", gap: "10px", margin: "10px 0" }}>
        <button id="compiler" onClick={() => setShowCompiler(!showCompiler)}>
          {showCompiler ? "Hide Compiler" : "Show Compiler"}
        </button>

        <button
          onClick={showPlacementQuestions}
          style={{
            background: "#4CAF50",
            color: "white",
            border: "none",
            padding: "8px 14px",
            borderRadius: "20px",
            cursor: "pointer",
          }}
        >
          📚 Placement Preparation Practice
        </button>
      </div>

      {/* Compiler Display */}
      {showCompiler && (
        <div className="compiler-container">
          <iframe
            src="https://www.programiz.com/c-programming/online-compiler/"
            width="800"
            height="500"
            style={{ border: "none" }}
            title="Online Compiler"
          ></iframe>
        </div>
      )}

      {/* Placement Questions Section */}
      {loadingQuestions && (
        <div style={{ marginTop: "20px", fontStyle: "italic", color: "gray" }}>
          🤔 Thinking... preparing your questions...
        </div>
      )}

      {placementQuestions.length > 0 && !loadingQuestions && (
        <div className="placement-section" style={{ marginTop: "20px" }}>
          <h3>Placement Practice Questions</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {placementQuestions.map((item, index) => (
              <li
                key={index}
                style={{
                  background: "#f9f9f9",
                  padding: "10px",
                  marginBottom: "10px",
                  borderRadius: "8px",
                }}
              >
                <strong>Q{index + 1}:</strong> {item.q}
                <div>
                  <button
                    onClick={() => toggleAnswer(index)}
                    style={{
                      marginTop: "5px",
                      background: "#007BFF",
                      color: "white",
                      border: "none",
                      padding: "4px 10px",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                  >
                    {showAnswers[index] ? "Hide Answer" : "Show Answer"}
                  </button>
                </div>
                {showAnswers[index] && (
                  <p style={{ marginTop: "5px", color: "#333" }}>
                    <strong>Answer:</strong> {item.a}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
<PlacementPractice/>
      {/* Quiz Link */}
      <Link to={"/courses/Quiz"}>
        <button id="quiz">QUIZ</button>
      </Link>

      {/* Comments Section */}
      <div className="comments-section">
        <h3>Comments</h3>
        <div className="comment-input">
          <input
            type="text"
            placeholder="Your Name"
            value={commentName}
            onChange={(e) => setCommentName(e.target.value)}
          />
          <textarea
            placeholder="Add a comment..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          />
          <button className="comment-btn" onClick={addComment}>
            Post Comment
          </button>
        </div>

        <div className="comment-list">
          {comments.map((c, index) => (
            <div key={index} className="comment-card">
              <div className="comment-header">
                <strong>{c.name}</strong> <span>• just now</span>
              </div>
              <p>{c.text}</p>
              <div className="comment-actions">
                <button>👍 Like</button>
                <button>💬 Reply</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Notes Section */}
      <div className="notes-section">
        <h3>Your Notes</h3>
        <textarea
          placeholder="Write your key points here..."
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </div>

      {/* Floating Chatbot Button */}
      <ChatbotButton />
      
    </>
  );
}
