import { useNavigate } from "react-router-dom";

export default function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // remove o token
    navigate("/login", { replace: true }); // redireciona para login
  };

  return <button onClick={handleLogout}>Logout</button>;
}


