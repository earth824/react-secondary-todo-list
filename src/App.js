import { Routes, Route } from 'react-router-dom';

import RegisterPage from './pages/Register';
import LoginPage from './pages/Login';
import HomePage from './pages/Home';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
