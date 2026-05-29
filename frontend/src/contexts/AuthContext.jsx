import { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [autenticado, setAutenticado] = useState(false);
  const [usuario, setUsuario] = useState(null);

  const login = (dadosUsuario) => {
    setUsuario({
        id: 0,
        nome: "José Lucas",
        email: dadosUsuario.email
    });
    setAutenticado(true);
  };

  const logout = () => {
    setUsuario(null);
    setAutenticado(false);
  };

  return (
    <AuthContext.Provider value={{ autenticado, usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  return useContext(AuthContext);
}