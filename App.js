import "./App.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";  
import Header from "./components/common/header/Header";
import Footer from "./components/common/footer/Footer";
import CourseHome from "./components/allcourses/CourseHome";
import Team from "./components/team/Team";
import Home from "./components/home/Home";
import Videos from "./components/allcourses/Videos";
import Login from "./login/src/components/login";
import Python from "./components/allcourses/Python";
import Caed from "./components/allcourses/Caed";
import Quiz from "./components/Quiz/Quiz";
import { useState } from "react";
function AppContent() {
  const location = useLocation();  
    const [name, setname] = useState("");
  

  const hideHeaderFooter = location.pathname === "/login" || location.pathname === "/register";
  
  return (
    <>
      {!hideHeaderFooter && <Header />}
      <Routes>
        <Route path="/login" element={<Login />} />           
        <Route path="/" element={<Home />} />           
        <Route path="/courses" element={<CourseHome />} />
        <Route path="/team" element={<Team />} />
        <Route path={`/courses/Videos/javascript`} element={<Videos />} />
        <Route path={`/courses/Videos/python`} element={<Python />} />
        <Route path={`/courses/Videos/Caed`} element={<Caed />} />

        <Route path="/courses/quiz" element={<Quiz />} />

      </Routes>
      {!hideHeaderFooter && <Footer />}
    </>
  );
}
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}


export default App;

