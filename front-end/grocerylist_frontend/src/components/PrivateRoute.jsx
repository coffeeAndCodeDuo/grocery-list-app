import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const token = localStorage.getItem("token"); // ou usa context/global state

  // Se existir token => mostra a página
  // Caso contrário => redireciona para login
  return token ? children : <Navigate to="/login" replace />;
}

