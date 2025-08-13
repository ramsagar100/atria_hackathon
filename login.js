import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "./firebase";
import { ToastContainer, toast } from "react-toastify";
// import SignInwithGoogle from "./signInWIthGoogle";
import { Link } from "react-router-dom";
import "./login.css";
import "react-toastify/dist/ReactToastify.css";
 
function Login() {
  const loginStyle = {
    backgroundImage: "url('/login_background.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',  
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in Successfully");

      toast.success("✅ Login Successful", {
        position: "top-right",
        autoClose: 2000, // Wait 2s before closing
        className: "small-toast", // Custom small toast style
        onClose: () => {
          setTimeout(() => {
            window.location.href = "/courses";
          }, 500); // Slight extra delay for smooth transition
        },
      });
    } catch (error) {
       error.message="Invalid UserId or Password";
      console.log(error.message);
      toast.error("❌ " + error.message, {
        position: "top-right",
        autoClose: 3000,
        className: "small-toast", // Apply small size styling
      });
    }
  };

  return (
    <div id="loginpage" >
      <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={true}
      closeButton={false} // This removes the close button
      closeOnClick
      pauseOnHover
      draggable
      className="small-toast" />
      
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          New user <Link to="/register">Register Here</Link>
        </p>
        {/* <SignInwithGoogle /> */}
      </form>
    </div>
  );
}

export default Login;
