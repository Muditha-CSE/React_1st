import React, { useState, useEffect, useRef } from "react";
import logoimg from "../assets/logo.png";
import lottie from "lottie-web";
import animationData1 from "../animations/back_main.json";
import animationData2 from "../animations/Aura.json";
import { useNavigate } from "react-router-dom";

function Aura_login() {
  const navigate = useNavigate();
  const animationContainer1 = useRef(null);
  const animationContainer2 = useRef(null);

  const [username, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMessage] = useState("");

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer1.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData1,
      rendererSettings: {
        preserveAspectRatio: "none", // Forces stretch to fill
      },
    });
    return () => anim.destroy();
  }, []);

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

  const submitbut = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/Aura_login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // tell backend it’s JSON
        },
        body: JSON.stringify({ username: username, password: password }),
      });

      const data = await response.json();
      setMessage(data.msg);

    } catch (error) {
      console.error("Error fetching message:", error);
    }
    setUser("");
    setPassword("");
  };

  return (
    <>
      <div className="app">
        <div ref={animationContainer1} className="main_back"></div>
        <div className="logincnt">
          <div ref={animationContainer2} className="mid_back"></div>
          <img id="logo" src={logoimg} alt="logo" />
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
              Login
            </button>
            <div id="finl_txt">
              <p>
                Still not regitered?{" "}
                <span
                  id="span"
                  style={{
                    color: "blue",
                    cursor: "pointer",
                    textDecoration: "underline",
                  }}
                  onClick={() => navigate("/register")}
                >
                  click here
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aura_login;
