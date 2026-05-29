import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router';
import { useAuth } from './contexts/AuthContext';
import Layout from './Components/Layout/Layout';
import Dashboard from './Pages/Dashboard';
import Faltas from './Pages/Faltas';
import Notas from './Pages/Notas';
import Boletos from './Pages/Boletos';
import Requerimentos from './Pages/Requerimentos';
import Login from './Pages/Login';

function App() {
  const { autenticado } = useAuth();


  useEffect(() => {
    fetch('http://localhost:9999/api/requerimentos') 
      .then(res => res.json())
      .then(data => console.log("Requerimentos recebidos da API:", data))
      .catch(err => console.error("Erro DevOps: O Frontend não consegue acessar a API!", err));
  }, []);



  return (
    <Routes>
      <Route 
        path="/login" 
        element={!autenticado ? <Login /> : <Navigate to="/" />} 
      />

      <Route 
        path="/" 
        element={autenticado ? <Layout /> : <Navigate to="/login" />}
      >
        <Route index element={<Dashboard />} />
        <Route path="faltas" element={<Faltas />} />
        <Route path="notas" element={<Notas />} />
        <Route path="boletos" element={<Boletos />} />
        <Route path="requerimentos" element={<Requerimentos />} />
      </Route>

      <Route path="*" element={<Navigate to={autenticado ? "/" : "/login"} />} />
    </Routes>
  );
}

export default App;