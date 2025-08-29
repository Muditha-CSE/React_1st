import { HashRouter, Routes, Route } from 'react-router-dom';
import Aura_login from './Aura_login/Aura_login';
import Aura_sign from './Aura_signin/Aura_sign';

function App() {
  return (
    <HashRouter>
      <Routes>
        {/* Login page */}
        <Route path="/" element={<Aura_login />} />
        {/* Register page */}
        <Route path="/register" element={<Aura_sign />} />
      </Routes>
    </HashRouter>
  );
}

export default App;