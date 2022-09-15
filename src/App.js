import { Routes, Route } from 'react-router-dom';

import RegisterPage from './pages/Register';
import LoginPage from './pages/Login';
import HomePage from './pages/Home';
import Header from './components/Header';
import { useEffect, useState } from 'react';

function App() {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setIsLogged(true);
    }
  }, []);

  return (
    <>
      <Header />
      <Routes>
        {isLogged ? (
          <Route path="/" element={<HomePage />} />
        ) : (
          <>
            <Route path="/register" element={<RegisterPage />} />
            <Route
              path="/login"
              element={<LoginPage successLogin={() => setIsLogged(true)} />}
            />
          </>
        )}
        <Route path="*" element={<h1>404 !!! Not found</h1>} />
      </Routes>
    </>
  );
}

export default App;
