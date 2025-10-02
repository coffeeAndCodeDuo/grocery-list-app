import { useNavigate } from "react-router-dom";

export default function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // remove o token
    navigate("/login", { replace: true }); // redireciona para login
  };

  return <button onClick={handleLogout} className="text-link-red underline text-base font-semibold" >Logout</button>;
}


