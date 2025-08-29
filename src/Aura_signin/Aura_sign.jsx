import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom"; 

// 🔹 Assets

import logoimg from "../assets/logo.png";

// 🔹 Animations
import lottie from "lottie-web";
import animationData1 from "../animations/back_main.json";
import animationData2 from "../animations/Aura.json";

// 🔹 Styles
import "./Aura_sign.css";

function Aura_sign() {
  // ---------------------- State ----------------------
  const [username, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMessage] = useState("");


  // ---------------------- Refs ----------------------
  const animationContainer1 = useRef(null);
  const animationContainer2 = useRef(null);

  // ---------------------- Hooks ----------------------
  const navigate = useNavigate();

  // 🔹 Animation 1 (background)
  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer1.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData1,
      rendererSettings: {
        preserveAspectRatio: "none", // stretch to fill
      },
    });
    return () => anim.destroy();
  }, []);

  // 🔹 Animation 2 (mid-back)
  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer2.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData2,
    });
    return () => anim.destroy();
  }, []);

  // ---------------------- Handlers ----------------------
  const submitbut = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: username, password: password }),
      });
      setUser("");
      setPassword("");
      const data = await response.json();

      setMessage(data.msg);

    } catch (error) {
      console.error("Error fetching message:", error);
    }
  };

  const back_to_main = () => {
    navigate("/");
  };

  // ---------------------- JSX ----------------------
  return (
    <div className="app">
      {/* 🔹 Background animation */}
      <div ref={animationContainer1} className="main_back"></div>

      <div className="logincnt">
        {/* 🔹 Mid animation */}
        <div ref={animationContainer2} className="mid_back"></div>

        {/* 🔹 Logo */}
        <img id="logo" src={logoimg} alt="logo" />

        {/* 🔹 Form */}
        <div className="login">
          <p style={{ color: "black", marginTop: "10px" }}>{msg}</p>

          <label>User Name</label>
          <input
            className="inputs"
            type="text"
            placeholder="Enter Your name"
            value={username}
            onChange={(e) => setUser(e.target.value)}
          />
          <br />

          <label>Password</label>
          <input
            className="inputs"
            type="number"
            min="0"
            max="999999"
            placeholder="6-digit password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />

          <button type="button" className="button_new" onClick={submitbut}>
            Sign IN
          </button>
          <button type="button" className="button_new" onClick={back_to_main}>
            Go back
          </button>
        </div>
      </div>
    </div>
  );
}

export default Aura_sign;
