import { Routes, Route } from 'react-router-dom';

import RegisterPage from './pages/Register';
import LoginPage from './pages/Login';
import HomePage from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default App;
