import { Routes, Route } from 'react-router-dom';
import { useContext } from 'react';

import RegisterPage from './pages/Register';
import LoginPage from './pages/Login';
import HomePage from './pages/Home';
import Header from './components/Header';
import { AuthContext } from './contexts/AuthContext';

function App() {
  const ctx = useContext(AuthContext);
  return (
    <>
      <Header />
      <Routes>
        {ctx.isLogged ? (
          <Route path="/" element={<HomePage />} />
        ) : (
          <>
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
          </>
        )}
        <Route path="*" element={<h1>404 !!! Not found</h1>} />
      </Routes>
    </>
  );
}

export default App;
