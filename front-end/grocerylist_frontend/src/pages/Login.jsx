import Header from "../components/Header.jsx";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <h2>Login Page</h2>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        onClick={() => navigate("/home")}
      >
        Home
      </button>
    </div>
  );
}
