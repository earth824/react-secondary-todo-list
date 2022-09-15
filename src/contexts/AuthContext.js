import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setIsLogged(true);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isLogged, setIsLogged }}>
      {children}
    </AuthContext.Provider>
  );
}

const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContextProvider;

export { AuthContext, useAuth };
