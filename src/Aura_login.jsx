import React, { useState, useEffect } from "react";
import background from "./assets/background_login.jpg";
import white from "./assets/white.jpg";
import logoimg from "./assets/logo.png";
import "./Aura_login.css";

function Aura_login() {
  const [showFirstImage, setShowFirstImage] = useState(true);
  const [showFirstGradient, setShowFirstGradient] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirstImage(prev => !prev);
      setShowFirstGradient(prev => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Gradient background layers, fixed full screen */}
      <div
        className="gradientBg"
        style={{
          background: "linear-gradient(45deg, #649decff, #ffffffff)",
          opacity: showFirstGradient ? 1 : 0,
          zIndex: showFirstGradient ? 0 : -1,
        }}
      />
      <div
        className="gradientBg"
        style={{
          background: "linear-gradient(45deg, #c8d8ef, #2f2f37)",
          opacity: showFirstGradient ? 0 : 1,
          zIndex: showFirstGradient ? -1 : 0,
        }}
      />

      {/* Main login container */}
      <div className="logincnt">
        {/* Background images crossfade */}
        <div
          className="bgImage"
          style={{
            backgroundImage: `url(${background})`,
            opacity: showFirstImage ? 1 : 0,
            zIndex: showFirstImage ? 2 : 1,
          }}
        />
        <div
          className="bgImage"
          style={{
            backgroundImage: `url(${white})`,
            opacity: showFirstImage ? 0 : 1,
            zIndex: showFirstImage ? 1 : 2,
          }}
        />
        <img id="logo" src={logoimg} alt="logo" />
        <div className="login">
          <label>User Name</label>
          <br />
          <input className="inputs" type="text" placeholder="Enter Your name" />
          <br />
          <label>Password</label>
          <br/>
          <input
            className="inputs"
            type="number"
            min="0"
            max="999999"
            placeholder="6-digit password"
          />
          <br />
          <button type="button" id="button_new">
            Login
          </button>
        </div>
      </div>
    </>
  );
}

export default Aura_login;
