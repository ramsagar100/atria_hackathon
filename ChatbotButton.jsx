// ChatbotButton.js
import React from "react";
import { FaRobot } from "react-icons/fa";
import "./ChatbotButton.css";

export default function ChatbotButton({ onClick }) {
  return (
    <button className="chatbot-btn" onClick={onClick}>
      <FaRobot size={28} />
    </button>
  );
}
