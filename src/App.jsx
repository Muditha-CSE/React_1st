import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Aura_login from './Aura_login/Aura_login';
import Aura_sign from './Aura_signin/Aura_sign'; // your register page

function App() {
  return (
    <Router>
      <Routes>
        {/* Login page */}
        <Route path="/" element={<Aura_login />} />

        {/* Register page */}
        <Route path="/register" element={<Aura_sign />} />
      </Routes>
    </Router>
  );
}

export default App;
