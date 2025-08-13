import React, { useState, useRef } from "react";
import "./Videos.css";
import { Link } from "react-router-dom";
import ChatbotButton from "./ChatbotButton"; // assuming you have this

export default function Python() {
  const [videoName, setVideoName] = useState("django1.mp4");
  const [showCompiler, setShowCompiler] = useState(false);
  const [liked, setLiked] = useState(false);
  const [comments, setComments] = useState([
    { name: "Alice", text: "This was so helpful!" },
    { name: "John", text: "Really enjoyed the explanation." },
    { name: "Sara", text: "I finally understand Django basics!" },
  ]);
  const [commentName, setCommentName] = useState("");
  const [commentText, setCommentText] = useState("");
  const [notes, setNotes] = useState("");
  const videoRef = useRef(null);

  const lessons = [
    "django1.mp4",
    "django2.mp4",
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

  const handleAIButton = () => {
    alert("AI Assistant coming soon!");
  };

  return (
    <>
      <h2 className="page-title">Python Course</h2>

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

        {/* Course Lessons (YouTube Thumbnail Style) */}
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
          onClick={handleAIButton}
          style={{
            background: "#ff9900",
            color: "white",
            border: "none",
            padding: "8px 14px",
            borderRadius: "20px",
            cursor: "pointer",
          }}
        >
          🤖 AI Help
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
