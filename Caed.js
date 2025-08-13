import React, { useState, useRef } from "react";
import "./Videos.css"; // Ensure this CSS file exists
import Quiz from "../Quiz/Quiz";
import { Link } from "react-router-dom";
export default function Caed({course}) {
  const [videoName, setVideoName] = useState("sujith1.mp4");
  const [showCompiler, setShowCompiler] = useState(false);
  const videoRef = useRef(null);
 console.log(course)
  const changeVideo = (newVideo) => {
    setVideoName(newVideo);
    if (videoRef.current) {
      videoRef.current.src = `/${newVideo}`;
      videoRef.current.load(); 
    }
  };

  return (
    <>
      <h2>HELLO Caed</h2>
      <div className="container">
        <div className="video-container">
          <video ref={videoRef} className="video-player" controls>
            <source src={`/${videoName}`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="video-buttons">
          {["sujith1.mp4", "sujith2.mp4", "sujith3.mp4", "sujith4.mp4", "sujith5.mp4", "sujith6.mp4"].map((file, index) => (
            <button key={index} onClick={() => changeVideo(file)}>
              caed {index + 1}
            </button>
          ))}
        </div>
      </div>

     

      <Link to={"/courses/Quiz"}><button id="quiz">QUIZ</button></Link>

    </>
  );
}
