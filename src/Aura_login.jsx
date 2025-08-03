import './Aura_login.css';
import background from './assets/background_login.jpg';
import logoimg from './assets/logo.png';
import white from './assets/white.jpg';
import React, { useEffect, useState } from 'react';

function Aura_login() {
  const [bgImage, setBgImage] = useState(background);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgImage(prev => (prev === background ? white : background));
    }, 2000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div
      className="logincnt"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <img id="logo" src={logoimg} alt="logo" />
      <div className="login">
        <label>User Name</label>
        <br />
        <input
          className="inputs"
          type="text"
          placeholder="Enter Your name"
        />
        <br />
        <label>Password</label>
        <input
          className="inputs"
          type="number"
          min="000000"
          max="999999"
          placeholder="6-digit password"
        />
        <br />
        <button type="button" id="button_new">
          Login
        </button>
      </div>
    </div>
  );
}

export default Aura_login;
